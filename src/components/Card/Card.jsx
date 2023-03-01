import React, { useState } from 'react'
import './Card.css'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from '@iconscout/react-unicons'; 
import Chart from 'react-apexcharts';
const Card = (props) => {
    const [expanded, setExpanded] = useState(false)
  return (
        <AnimateSharedLayout>
            {
                expanded?
                    <ExpandedCard param = {props} setExpanded={()=>setExpanded(false)}/>: 
                <CompactCard param = {props} setExpanded={()=> setExpanded(true)}/>
            }
        </AnimateSharedLayout>
    )
}

// CompactCard
function CompactCard({param, setExpanded}){
    const Png = param.png;
    return(
        <motion.div className="CompactCard" 
        style = {{
            background : param.color.backGround,
            boxShadow :param.color.boxShadow
        }}
        onClick = {setExpanded}
        layoutId = 'expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                value = {param.barValue}
                text = {`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>${param.value}</span>
                <span>Last 24 hours</span>
            </div>
        </motion.div>
    )
}
// ExpandedCard
function ExpandedCard({param, setExpanded}){
    return( 
        <motion.div className="ExpandedCard"
        style={{
            background: param.color.backGround,
            boxShadow: param.color.boxShadow,
        }}
        layoutId = 'expandableCard'
        >
        <div>
            <UilTimes onClick={setExpanded}/>
        </div>
        <span>{param.title}</span>
        <div className="chartContainer">
            {/* something here */}
        </div>
        <span>Last 24 hours</span>
        </motion.div>
    )
}
export default Card