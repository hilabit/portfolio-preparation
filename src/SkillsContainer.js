import React, {Component} from 'react';
import styled from 'styled-components';
import { FaHtml5, FaJs, FaCss3Alt, FaReact, FaGit } from 'react-icons/fa'; //font awesome
import Skill from './Skill';
import './App.css';


export const standardPadding = 50;

const SkillsList = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-around;
    padding:${standardPadding}px;
    `;


class SkillsContainer extends Component {






render() {
    return(
        <div className = "main skills">
         Skills:
          <SkillsList>
                <Skill name = "Html" icon = {<FaHtml5 />}>
                    expert  {/*this is children*/}
                </Skill>
                <Skill name = "JavaScript" icon = {<FaJs />}>
                    newbie {/*this is children*/}
                </Skill>
                <Skill name = "CSS" icon = {<FaCss3Alt />}/>
                <Skill name = "React" icon = {<FaReact />}/>
                <Skill icon = {<FaGit />}/>



         </SkillsList>
      </div>

    );
    }
}










export default SkillsContainer;
