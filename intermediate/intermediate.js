var jsonObject = JSON.parse(employees);
console.table(jsonObject);

var doc = document.getElementById('result');
doc.innerHTML += `
<tr>
    <th>User Id</th>
    <th>Job</th>
    <th>Name</th>
    <th>Last Name</th>
    <th>Email</th>
    <th>Salary</th>
</tr>`;

for(var i=0; i<jsonObject.length;i++)
{
    doc.innerHTML += `
<tr>
    <td>${jsonObject[i].userId}</td>
    <td>${jsonObject[i].jobTitleName}</td>
    <td>${jsonObject[i].firstName}</td>
    <td>${jsonObject[i].lastName}</td>
    <td>${jsonObject[i].emailAddress}</td>
    <td>${jsonObject[i].Salary}</td>
</tr>`;
}