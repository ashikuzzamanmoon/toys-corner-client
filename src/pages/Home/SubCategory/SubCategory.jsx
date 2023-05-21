import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ToyCard from './ToyCard/ToyCard';

const SubCategory = () => {
    const [text,setText]=useState('teddy');
    const [toys,setToys]=useState([]);
    useEffect(()=>{
        
        fetch(`http://localhost:5000/allToys/${text}`)
        .then(res=>res.json())
        .then(data=>setToys(data))

    },[text])
    const handleTab=(search)=>{
       setText(search)

    }

    return (
        <div>
             <Tabs>
    <TabList>
      <Tab onClick={()=>handleTab('teddy')} >Teddy</Tab>
      <Tab onClick={()=>handleTab('unicorn')}>Unicorn</Tab>
      <Tab onClick={()=>handleTab('pet')}>Pet</Tab>
    </TabList>

    <TabPanel>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
            toys.map(toy=><ToyCard
            key={toy._id}
            toyDetails={toy}
            ></ToyCard>)
        }
       </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
            toys.map(toy=><ToyCard
            key={toy._id}
            toyDetails={toy}
            ></ToyCard>)
        }
       </div>
    </TabPanel>
    <TabPanel>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {
            toys.map(toy=><ToyCard
            key={toy._id}
            toyDetails={toy}
            ></ToyCard>)
        }
       </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default SubCategory;