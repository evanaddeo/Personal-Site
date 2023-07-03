import "./SkillTag.css"

function SkillTag({ skillName, url}) {
    return (
        <button id="elem">
            <img src="https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK.jpg" alt="Zebra!"/>
            <span>{ skillName }</span>
        </button>
    );
}

export default SkillTag;