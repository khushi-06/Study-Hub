const Navigation =()=>{
    return(
        <nav>
        <div className='navbar'>
        <h1>SM</h1>
        <div className='item'>
          <div className='icons'>
            <img className='icon' src='/icon/user-solid.svg'></img>
            <li>LOGIN</li>
          </div>
          <div className='icons'>
            <img className='icon' src='/icon/user-solid.svg'></img>
            <li>DEPARTMENT</li>
          </div>
          <div className='icons'>
            <img className='icon' src='/icon/user-solid.svg'></img>
            <li>HOME</li>
          </div>
          <div className='icons'>
            <img className='icon' src='/icon/user-solid.svg'></img>
            <li>FEEDBACK</li>
          </div>
        </div>
      </div>
    </nav>
    );
};

export default Navigation;