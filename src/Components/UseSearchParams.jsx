import React from 'react'
import { useSearchParams } from 'react-router-dom';
import './UseSearchParams.css'

export default function UseSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const users = [
    {
      id: "1",
      name: "Rupa",
      email: "rupa@gmail.com",
      city: "Eluru",
      role: "Java Developer",
    },
    {
      id: "2",
      name: "Pavani",
      email: "pavani@gmail.com",
      city: "Vijayawada",
      role: "Desinger",
    },
    {
      id: "3",
      name: "Swapna",
      email: "swapna@gmail.com",
      city: "Pune",
      role: "Coder",
    },
    {
      id: "4",
      name: "Vamsi",
      email: "vamsi@gmail.com",
      city: "Hyderabad",
      role: "FrontEnd Developer",
    },
    {
      id: "5",
      name: "Rohith",
      email: "rohith@gmail.com",
      city: "Hydearbad",
      role: "Backend Developer",
    },
    {
      id: "6",
      name: "Anjali",
      email: "anjali@gmail.com",
      city: "Chennai",
      role: "UI Developer",
    },
    {
      id: "7",
      name: "Kiran",
      email: "kiran@gmail.com",
      city: "Bengaluru",
      role: "Full Stack Developer",
    },
    {
      id: "8",
      name: "Meena",
      email: "meena@gmail.com",
      city: "Mumbai",
      role: "Product Designer",
    },
    {
      id: "9",
      name: "Arjun",
      email: "arjun@gmail.com",
      city: "Delhi",
      role: "Software Engineer",
    },
    {
      id: "10",
      name: "Sneha",
      email: "sneha@gmail.com",
      city: "Kochi",
      role: "QA Engineer",
    },
    {
      id: "11",
      name: "Nikhil",
      email: "nikhil@gmail.com",
      city: "Mysuru",
      role: "DevOps Engineer",
    },
    {
      id: "12",
      name: "Divya",
      email: "divya@gmail.com",
      city: "Visakhapatnam",
      role: "Business Analyst",
    },
    {
      id: "13",
      name: "Sanjay",
      email: "sanjay@gmail.com",
      city: "Nellore",
      role: "Mobile Developer",
    },
    {
      id: "14",
      name: "Lakshmi",
      email: "lakshmi@gmail.com",
      city: "Guntur",
      role: "Data Analyst",
    },
    {
      id: "15",
      name: "Varun",
      email: "varun@gmail.com",
      city: "Warangal",
      role: "Cloud Engineer",
    },
    {
      id: "16",
      name: "Pooja",
      email: "pooja@gmail.com",
      city: "Tirupati",
      role: "Project Manager",
    },
    {
      id: "17",
      name: "Rahul",
      email: "rahul@gmail.com",
      city: "Rajahmundry",
      role: "Security Engineer",
    },
    {
      id: "18",
      name: "Keerthi",
      email: "keerthi@gmail.com",
      city: "Kakinada",
      role: "Technical Writer",
    },
    {
      id: "19",
      name: "Ajay",
      email: "ajay@gmail.com",
      city: "Ongole",
      role: "Database Administrator",
    },
    {
      id: "20",
      name: "Harini",
      email: "harini@gmail.com",
      city: "Amaravati",
      role: "Support Engineer",
    },
  ];

  const itemsPerPage = 5;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const startNum = (currentPage - 1) * itemsPerPage;
  const endNum = startNum + itemsPerPage;
  const visibleUsers = users.slice(startNum, endNum);

  const gotoPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setSearchParams({ page: String(pageNumber) });
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      gotoPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      gotoPage(currentPage - 1);
    }
  };

  return (
    <>
    <div className='searchparams-container'>
      {visibleUsers.map((persons)=>(
        <div className='searchparams-card' key={persons.id}>
          <p>Id: {persons.id}</p>
          <p>Name:{persons.name}</p>
          <p>Email:{persons.email}</p>
          <p>City: {persons.city}</p>
          <p>Role: {persons.role}</p>
        </div>
      ))}
    </div>
    <div className='searchparams-pagination'>
      <button
        type='button'
        onClick={prevPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className='searchparams-page-numbers'>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              type='button'
              className={pageNumber === currentPage ? 'active' : ''}
              key={pageNumber}
              onClick={() => gotoPage(pageNumber)}
            >
              {pageNumber}
            </button>
          ),
        )}
      </div>
      <button
        type='button'
        onClick={nextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
    </>
  )
}
