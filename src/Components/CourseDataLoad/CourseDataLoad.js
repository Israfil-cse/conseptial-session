import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData.json';
import Cart from '../Cart/Cart';
import CourseDataShow from '../CourseDataShow/CourseDataShow';

const CourseDataLoad = () => {
    const [Data, setData] = useState([]);

    useEffect(() => {
        setData(fakeData)
    }, []);

    const [dataRecived , setDataRecived] = useState([]);
    const handleClick = (datRecived) => {
        const newCart = [...dataRecived, datRecived]
        setDataRecived(newCart);
    }

    return (
        <div>
            <div className="dataShow">
                {
                    Data.map(dt => <CourseDataShow coursedata={dt} datapass = {handleClick} key={dt.id} ></CourseDataShow>)
                }
            </div>


            <div className="cart">
                <Cart datapassed ={dataRecived} ></Cart>
            </div>

        </div>
    );
};

export default CourseDataLoad;