import axios from "axios";

const BASE_URL = "http://localhost:3000/";

async function fetchUsers() {
    try {
        const res = await axios.get(`${BASE_URL}api/user/list`);
        return res.data.Users || [];
    } catch (err) {
        console.error("User fetch error:", err.message);
        return [];
    }
}

async function fetchTodos() {
    try {
        const res = await axios.get(`${BASE_URL}api/todo/list`);
        return res.data.todos || [];
    } catch (error) {
        console.error("Fetch todo error:", error);
        return [];
    }
}

async function getExpiredTodos() {
    const todos = await fetchTodos();

    const now = new Date().getTime();

    return todos.filter(todo => {
        return (
            !todo.isCompleted &&
            new Date(todo.deadLine).getTime() <= now
        );
    });
}

async function sendMail() {
    const expiredTodos = await getExpiredTodos();
    const users = await fetchUsers();

    if (!expiredTodos.length) {
        console.log("✅ No expired todos");
        return;
    }

    for (const todo of expiredTodos) {

        // find ALL users with same userName
        const matchedUsers = users.filter(
            user => user.userName === todo.userName
        );

        if (!matchedUsers.length) {
            console.log(`❌ No user found for ${todo.userName}`);
            continue;
        }

        for (const user of matchedUsers) {
            const body = `
Hello ${user.userName},

Your todo "${todo.todoHeading}" is still pending.
Deadline was: ${new Date(todo.deadLine).toDateString()}.

Please complete it as soon as possible.
            `;

            try {
                await axios.post(`${BASE_URL}api/mail/send`, {
                    to: user.email,
                    sub: "Todo Reminder",
                    body
                });

                console.log(`✅ Mail sent to ${user.email}`);
            } catch (err) {
                console.error(`❌ Failed for ${user.email}`, err.message);
            }
        }
    }
}

// sendMail();
export default sendMail