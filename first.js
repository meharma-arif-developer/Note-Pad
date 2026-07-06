
function savetext(){
     let text = document.getElementById("textarea").value;

    if (text.trim() === "") {
        alert("Please write something first!");
        return;
    }

    let blob = new Blob([text], { type: "text/plain;charset=utf-8" });

    let link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "mynote.txt";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
function Cleartext(){
    document.getElementById("textarea").value = "";
}
