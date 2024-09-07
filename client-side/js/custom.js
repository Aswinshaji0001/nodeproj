async function getEmployee() {
    const res =  fetch("http://localhost:3011/getemployee");
    const data = await (await res).json();
    str=``;
    data.map((dt)=>{
                        str+=`
                        <tr>
                        <td><input type="text" id="name" name="name" value=${dt.name} placeholder="Employee Name" class="input-box"></td>
                        <td><input type="text" id="desg" name="desg" value=${dt.desig} placeholder="Designation" class="input-box"></td>
                        <td><input type="text" id="salary" name="salary" value=${dt.salary} placeholder="Salary" class="input-box"></td>
                        <td><input type="text" id="exp" name="exp"  value=${dt.exp} placeholder="Experience" class="input-box"></td>
                        <td>
                            <button class="action-btn edit-btn">Edit</button>
                            <button class="action-btn save-btn">Save</button>
                            <button class="action-btn delete-btn">Delete</button>
                        </td>
                        </tr>
                        `
    })
    document.getElementById("main").innerHTML=str;

}
getEmployee();