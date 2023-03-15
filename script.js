function load_ajax() {
  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  ajax.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let data = JSON.parse(this.responseText);
      console.log(data);
      const tdBody = document.getElementById("data-output");
      let content = "";
      data.forEach((u) => {
        content += "<tr>";
        content += `<td>${u.id}</td>`;
        content += `<td>${u.name}</td>`;
        content += `<td>${u.username}</td>`;
        content += `<td>${u.email}</td>`;
        content += `<td>${u.address.street},${u.address.suite},${u.address.city}</td>`;
        content += `<td>${u.company.name}</td>`;
        content += `</tr>`;
      });

      tdBody.innerHTML = content;
    }
  };
  ajax.send();
}
load_ajax();
