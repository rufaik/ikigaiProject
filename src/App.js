import React, { useState} from 'react';
import './App.css';

function App() {

  const info = [
    {
      name: 'job1',
      skills:'skill1%',
      hours: 1.5,
      industry: 'industry1%',
      connected: [
        {
          id:"01",
          name: 'job2',
          skills:'skill2%',
          hours: 2.5,
          industry: 'industry2%',
        },
        {
          id:"02",
          name: 'job3',
          skills:'skill3%',
          hours: 3.5,
          industry: 'industry3%',
        },
        {
          id:"03",
          name: 'job4',
          skills:'skill4%',
          hours: 4.5,
          industry: 'industry4%',
        },
        {
          id:"04",
          name: 'job5',
          skills:'skill5%',
          hours: 5.5,
          industry: 'industry5%',
        },
        {
          id:"05",
          name: 'job6',
          skills:'skill6%',
          hours: 6.5,
          industry: 'industry6%',
        },
      ]
    },
    {
      name: 'job2',
      skills:'skill2%',
      hours: 2.5,
      industry: 'industry2%',
      connected: [
        {
          id:"01",
          name: 'job1',
          skills:'skill1%',
          hours: 1.5,
          industry: 'industry1%',
        },
        {
          id:"02",
          name: 'job6',
          skills:'skill6%',
          hours: 6.5,
          industry: 'industry6%',
        },
        {
          id:"03",
          name: 'job4',
          skills:'skill4%',
          hours: 4.5,
          industry: 'industry4%',
        },
        {
          id:"04",
          name: 'job5',
          skills:'skill5%',
          hours: 5.5,
          industry: 'industry5%',
        },
        {
          id:"05",
          name: 'job3',
          skills:'skill3%',
          hours: 3.5,
          industry: 'industry3%',
        },
      ]
    },
    {
      name: 'job3',
      skills:'skill3%',
      hours: 3.5,
      industry: 'industry3%',
      connected: [
        {
          id:"01",
          name: 'job2',
          skills:'skill2%',
          hours: 2.5,
          industry: 'industry2%',
        },
        {
          id:"02",
          name: 'job1',
          skills:'skill1%',
          hours: 1.5,
          industry: 'industry1%',
        },
        {
          id:"03",
          name: 'job4',
          skills:'skill4%',
          hours: 4.5,
          industry: 'industry4%',
        },
        {
          id:"04",
          name: 'job5',
          skills:'skill5%',
          hours: 5.5,
          industry: 'industry5%',
        },
        {
          id:"05",
          name: 'job6',
          skills:'skill6%',
          hours: 6.5,
          industry: 'industry6%',
        },
      ]
    },
    {
      name: 'job4',
      skills:'skill4%',
      hours: 4.5,
      industry: 'industry4%',
      connected: [
        {
          id:"01",
          name: 'job2',
          skills:'skill2%',
          hours: 2.5,
          industry: 'industry2%',
        },
        {
          id:"02",
          name: 'job3',
          skills:'skill3%',
          hours: 3.5,
          industry: 'industry3%',
        },
        {
          id:"03",
          name: 'job1',
          skills:'skill1%',
          hours: 1.5,
          industry: 'industry1%',
        },
        {
          id:"04",
          name: 'job5',
          skills:'skill5%',
          hours: 5.5,
          industry: 'industry5%',
        },
        {
          id:"05",
          name: 'job6',
          skills:'skill6%',
          hours: 6.5,
          industry: 'industry6%',
        },
      ]
    },
    {
      name: 'job5',
      skills:'skill5%',
      hours: 5.5,
      industry: 'industry5%',
      connected: [
        {
          id:"01",
          name: 'job6',
          skills:'skill6%',
          hours: 6.5,
          industry: 'industry6%',
        },
        {
          id:"02",
          name: 'job3',
          skills:'skill3%',
          hours: 3.5,
          industry: 'industry3%',
        },
        {
          id:"03",
          name: 'job4',
          skills:'skill4%',
          hours: 4.5,
          industry: 'industry4%',
        },
        {
          id:"04",
          name: 'job1',
          skills:'skill1%',
          hours: 1.5,
          industry: 'industry1%',
        },
        {
          id:"05",
          name: 'job2',
          skills:'skill2%',
          hours: 2.5,
          industry: 'industry2%',
        },
      ]
    },
    {
      name: 'job6',
      skills:'skill6%',
      hours: 6.5,
      industry: 'industry6%',
      connected: [
        {
          id:"01",
          name: 'job2',
          skills:'skill2%',
          hours: 2.5,
          industry: 'industry2%',
        },
        {
          id:"02",
          name: 'job3',
          skills:'skill3%',
          hours: 3.5,
          industry: 'industry3%',
        },
        {
          id:"03",
          name: 'job5',
          skills:'skill5%',
          hours: 5.5,
          industry: 'industry5%',
        },
        {
          id:"04",
          name: 'job4',
          skills:'skill4%',
          hours: 4.5,
          industry: 'industry4%',
        },
        {
          id:"05",
          name: 'job1',
          skills:'skill1%',
          hours: 1.5,
          industry: 'industry1%',
        },
      ]
    },

  ]
 
 const [center, setCenter] = useState("job1");
 const [main, setMain] = useState(info[0]);
 const [id, setId] = useState("01");



  return (
    <div className="bg-blue-900 max-w-sm mx-auto h-screen">
      <div className="w-full h-16 bg-green-400 text-white">Navbar</div>
      <div className="w-10/12 mx-auto mt-4 h-12 bg-blue-100 ">Searchbar</div>
      <div className="relative h-96 mt-4 flex items-center justify-center">
        <div className="w-28 h-28 bg-blue-300 flex justify-center items-center rounded-full">{center}</div>
        {info.map((item, i) => {
              if (item.name === center) {
                return (
                  <div>
                    <div
                      className="bg-orange-400 w-12 h-12 pt-4 flex justify-center items-center rounded-full absolute left-0 mx-auto right-0 top-8"
                      onClick={() => {
                        setMain(item.connected[0])
                        setId(item.connected[0].id)
                      }}
                    >{item.connected[0].id}</div>
                    <div
                      className="bg-orange-400 w-12 h-12 pt-4 flex justify-center items-center rounded-full absolute top-28 right-12"
                      onClick={() => {
                        setMain(item.connected[1])
                        setId(item.connected[1].id)
                      }}
                    >{item.connected[1].id}</div>
                    <div
                      className="bg-orange-400 w-12 h-12 pt-4 flex justify-center items-center rounded-full absolute bottom-20 right-16"
                      onClick={() => {
                        setMain(item.connected[2])
                        setId(item.connected[2].id)
                      }}
                    >{item.connected[2].id}</div>
                    <div
                      className="bg-orange-400 w-12 h-12 pt-4 flex justify-center items-center rounded-full absolute bottom-20 left-16"
                      onClick={() => {
                        setMain(item.connected[3])
                        setId(item.connected[3].id)
                      }}
                    >{item.connected[3].id}</div>
                    <div
                      className="bg-orange-400 w-12 h-12 pt-4 flex justify-center items-center rounded-full absolute top-28 left-12"
                      onClick={() => {
              
                        setMain(item.connected[4])
                        setId(item.connected[4].id)
                      }}
                    >{item.connected[4].id}</div>
                  </div>
                  )}})}
      </div>
      <div className="w-10/12 mx-auto p-4 bg-slate-400 text-white rounded-lg">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="mt-4">{main.name}</div>
          <div className="">main.range</div>
        </div>
        <div className="text-orange-400  w-12 h-12 pt-4 flex justify-center items-center rounded-full ml-auto bg-white">
        {id}
        </div>
      </div>

        <div className="flex flex-row">

          <div className="flex flex-col w-5/12">
            <div>Hours</div>
            <div>{main.hours}</div>
          </div>
          <div className="flex flex-col w-5/12 border-x-2 border-white pl-1">
            <div>Skills</div>
            <div>{main.skills}</div>
          </div>
          <div className="flex flex-col w-3/12 pl-1">
            <div>Industry</div>
            <div>{main.industry}</div>
          </div>
        </div>
        <div className="flex flex-row w-full mt-4">
        <div style={{"width": "30%"}} className="pt-3 pl-2 bg-green-300 text-sm rounded-lg">Summary</div>
        <div
          onClick={() => { 
            setCenter(main.name)
          }}
          style={{"width": "30%"}} 
          className="pt-3 pl-2 bg-green-300 text-sm rounded-lg mx-3">Pathways</div>
        <div style={{"width": "30%"}} className="pt-3 pl-2 bg-green-300 text-sm rounded-lg">Vacancies</div>
        </div>
      </div>
    </div>
  );
}

export default App;
