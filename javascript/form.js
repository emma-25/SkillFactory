function getInformation() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    document.querySelector("#form").addEventListener("submit", function(e) {
        e.preventDefault();
        console.log(`Name: ${name} 
Email: ${email}
Message: ${message} `);

                    let body = ``;
                    body += `
                    <div>
                        <h4 class="title">Data sent</h4>
                        <p class="text">Name: ${name}</p>
                        <p class="text">Email: ${email}</p>
                        <p class="text">Message: ${message}</p>
                    </div>
                    `;
                    document.getElementById("print-results").innerHTML = body;
    })
}