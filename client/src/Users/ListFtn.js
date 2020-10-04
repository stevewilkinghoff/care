import React from 'react';

const ComplexList = props => {
    stuff = props.stuff;
    return(
    <div>
    <ul>
        {props.stuff.map(item => (
            <li key={item._id}>
                <div>{item._id}</div>
                <div>{item.residentFirstName}</div>
            </li>
        ))}
    </ul>]
    </div>
    )
};

export default ComplexList;

//const UsersList = props => {
//    if (props.items.length === 0) {
//      return (
//        <div className="center">
//          <Card>
//            <h2>No users found.</h2>
//          </Card>
//        </div>
//      );
//    }
  
//    return (
//      <ul className="users-list">
//        {props.items.map(user => (
//          <UserItem
//            key={user.id}
//            id={user.id}
//            image={user.image}
//            name={user.name}
//            placeCount={user.places.length}
//          />
//        ))}
//      </ul>
//    );
//  };
  
//  export default UsersList;
  