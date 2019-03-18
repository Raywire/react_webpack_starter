import React from 'react';
import '../css/Ninjas.css'

const Ninjas = (props) => {
  const { ninjas } = props;
  const { deleteNinja} = props;
  const ninjaList = ninjas.map(ninja => {
    // if (ninja.age > 20){
    //   return (
    //     <div className="ninja" key={ ninja.id }>
    //       <div>Name: { ninja.name }</div>
    //       <div>Age: { ninja.age }</div>
    //       <div>Belt: { ninja.belt }</div>
    //     </div>    
    //    ) 
    // } else{
    //   return null
    // }
    return ninja.age > 20 ? (
      <div className="ninja" key={ ninja.id }>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
        <button onClick={function(){deleteNinja(ninja.id)}}>Delete Ninja</button>
      </div>
    ): null;
    })
    return(
      <div className="ninja-list">
        { ninjaList }
      </div>
    )
}

export default Ninjas