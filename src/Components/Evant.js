import React , { useState } from 'react'

const Evant = () => {
    const[data,setData] = useState({
        uname: '',email: '',mobile: '',address: ''
    });
    const [alldata,setAllData] = useState([])
    const clickHandle = (e) => {
        setData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));

        console.log(data.address);
    }
    const { email, uname, mobile, address } = data;
    const showData = () => {
        setAllData(prevAlldata => [...prevAlldata,{...data }])

        document.getElementsByName('uname')[0].value = '';
        document.getElementsByName('email')[0].value = '';
        document.getElementsByName('mobile')[0].value = '';
        document.getElementsByName('address')[0].value = '';

    }
    console.log("alldata is",data);
  return (
    <div>
      <h1>my name is</h1>
      <label htmlFor='uname'>Uname : </label>
      <input type='text' name='uname' onChange={clickHandle}/>
      <br />
      <br />
      <label htmlFor='email'>Email : </label>
      <input type='text' name='email' onChange={clickHandle}/>
      <br />
      <br />
      <label htmlFor='mobile'>Mobile No :</label>
      <input  type="number" name='mobile' onChange={clickHandle}/>
      <br />
      <br />
      <label htmlFor='address'>Address :</label>
      <input  type="text" name='address' onChange={clickHandle}/>
      <button type='button' onClick={showData}>submit</button>
      <br/><br/><br/><hr/><hr/>

      <table border={1}>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
        </tr>
        <tbody>
                {
                    alldata.map((item) => {
                        return (
                            <tr>
                                <td>{item.uname}</td>
                                <td>{item.email}</td>
                                <td>{item.mobile}</td>
                                <td>{item.address}</td>
                            </tr>
                        
                        )
                    })
                }
        </tbody>
      </table>
      
    </div>
  )
}

export default Evant
