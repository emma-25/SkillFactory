const USERS = "https://jsonplaceholder.typicode.com/users";

fetch(USERS)
    .then((response) => response.json())
    .then((data) => showData(data))
    .catch((err) => console.log("Error ", err));

    const showData = (data) => {
            let body = ``;
            data.map((user) => {
                const { id, name, email, phone, address, company}  = user;
                body += `
                    <tr>
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${email}</td>
                        <td>${address.city}</td>
                        <td>${phone}</td>
                        <td>${company.name}</td>
                    </tr>
                `;
                document.getElementById("user-info").innerHTML = body;
            });
    };