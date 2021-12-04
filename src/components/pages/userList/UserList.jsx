import './userList.css'
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {

	const [data, setData] = useState(userRows);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	}

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'user',
          headerName: 'User',
          width: 200,
          editable: true,
          renderCell: (params) => {
              return (
                  <div className="userListUser" >
                      <img className="userListImg" src={params.row.avatar} alt="" />
                      {params.row.username}
                  </div>
              )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
          editable: true,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 160,
          editable: true,
        },
        {
          field: 'transaction',
          headerName: 'Transaction Volume',
          width: 230,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                    <Link to={'/users/' + params.row.id}>
                      <button className='userListEdit' >Edit</button>
                    </Link>
                      <DeleteOutline className='userListDelete' onClick={()=>handleDelete(params.row.id)} />
                    </>
                )
            }
        }
      ];
      
    return (
        <div className="userList" >
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection/>
        </div>
    )
}

export default UserList
