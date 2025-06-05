import "./Card.css";

export default function Card() {
    
    const skillData = [
        {'name': 'javascript',
          'level': 'intemediate',
        'color': 'red',
        },
        {'name': 'python',
        'color': 'green',
        'level': 'advanced',

        },
        {'name': 'c++',
        'level': 'beginner',
        'color': 'blue',
        },
        {'name': 'django',
          'level': 'intemediate',

        'color': 'purple',
        },
        {'name': 'react',
          'level': 'beginner',
        'color': 'orange',
        },
    ]
    return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skills={skillData} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="src/assets/profile.png" alt="" className="avatar" />;
}
function Intro() {
  return (
    <div>
        <h1>Aakash Kumar</h1>
        <p>Hi, I am Python Full stack developer. A computer science and engineering student.</p>
    </div>
  );
}
function SkillList(props) {
  return (
    <div className="skill-list">
      {
        props.skills.map((skill,i )=> <Skill skill={skill} key={i}/>)
      }
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.skill.color, color: 'white'}}>
      <span>{props.skill.name}</span>
      <span>{props.skill.level === 'advanced' ? "💪"  : (props.skill.level === 'intermediate' ? 'i': 'b')}</span>
    </div>
  );
}
