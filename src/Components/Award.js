import React from 'react';
import AwardItem from './AwardItem';
import styled from 'styled-components'
import award from '../img/skills/award.svg';
import calander from '../img/skills/calender.svg';
import heads from '../img/skills/heads.svg';

const AwardsStyled = styled.div`
    background: linear-gradient(117.76deg, rgba(255, 255, 255, 0.7) -7.21%, rgba(255, 255, 255, 0.5) 118.08%);
    backdrop-filter: blur(9px);
    padding: 2.5rem 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
`;

export default function Award() {
    return (
    <AwardsStyled>
        <AwardItem icon={award} number={'+5'} text={'Awards'} />
        <AwardItem icon={calander} number={'+21'} text={'On Schedule'} />
        <AwardItem icon={heads} number={'+90'} text={'Git Repos'} />
        <AwardItem icon={award} number={'+5'} text={'Awards'} />
    </AwardsStyled>
    )
}
