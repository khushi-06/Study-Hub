import Card from 'react-bootstrap/Card';

const TextExample=() =>{
  return (
    <div className='ourcontet'>

    <div className='bar'>
      <div className='headline'>
        OUR CONTENT
      </div>
    </div>
    <div className='card1'>
        <Card.Title className='card-title'>FIRST YEAR</Card.Title>
        <hr size="4" width="100%" color="yellow" /> 
        <Card.Text>
          <div className='list1'>
          <li>Physics</li>
          <li> Mathematics 1</li>
          <li>Basic Electrical Engineering</li>
          <li>Engineering Graphics and Design </li>
          <li>Workshop Manufacturing-1</li>
          </div>

          <div className='list2'>
          <li>Chemistry</li>
          <li> Mathematics 2</li>
          <li>Programming for Problem Solving</li>
          <li> Engineering Mechanics</li>
          <li>Workshop Manufacturing-2</li>
          </div>
          
        </Card.Text>
  
     
    </div>

    <div className='card2'>
        <Card.Title className='card-title'>SECOND YEAR</Card.Title>
        <hr size="4" width="100%" color="yellow" /> 
        <Card.Text>
          <div className='list1'>
          <li> Data Structures</li>
          <li>Mathematics 3</li>
          <li>Database Management System </li>
          <li>Digital Logic Design and Analysis </li>
          <li>Computer Organisation and Architecture</li>
          </div>

          <div className='list2'>
          <li> Design and Analysis of Algorithms </li>
          <li>Mathematics 4 </li>
          <li>Operating System </li>
          <li> Computer Networks </li>
          <li>Computer Graphics</li>
          </div>
          
        </Card.Text>
    </div>

    <div className='card3'>
        <Card.Title className='card-title'>THIRD YEAR</Card.Title>
        <hr size="4" width="100%" color="yellow" /> 
        <Card.Text>
          <div className='list1'>
          <li>Theory of Computer Science </li>
          <li>Introduction to Intelligent System</li>
          <li> Microprocessor </li>
          <li>Advance Database Management System </li>
          <li>Workshop Manufacturing-1</li>
          </div>

          <div className='list2'>
          <li>Software Enginering</li>
          <li>Cryptographic Security System </li>
          <li>System programming compiler construction</li>
          <li> Internet Programming </li>
          <li>Digital Marketing</li>
          </div>
          
        </Card.Text>
    </div>


    <div className='card4'>
        <Card.Title className='card-title'>FOURTH YEAR</Card.Title>
        <hr size="4" width="100%" color="yellow" /> 
        <Card.Text>
          <div className='list1'>
          <li>Software Architecture</li>
          <li> Financial Management</li>
          <li>OE - HRM/MIS</li>
          <li>PE - DA/HCI</li>
          <li>ERP</li>
          </div>

          <div className='list2'>
          <li>Chemistry</li>
          <li> Mathematics 2</li>
          <li>Programming for Problem Solving</li>
          <li> Engineering Mechanics</li>
          <li>Workshop Manufacturing-2</li>
          </div>
          
        </Card.Text>
    </div>



    </div>
  );
}

export default TextExample;