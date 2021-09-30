import React from 'react';
 import Timeline from './Timeline'

export default function Experience() {
    return (
    <div>
        <div className="TimelineCon">
            <Timeline name={'2020 - 2024'} text={'Total : 4 + years of experience'} qualification={'Học tập tại HCMUS, VN'} />
            <Timeline name={'2020-2023'} text={'Total : 3 + years of experience'} qualification={'Làm việc tại đội công tác xã hội'} />
            <Timeline name={'2020 - ?'} text={'Total : 2 + years of experience'} qualification={'Học thuật toán, web tại nhà'} />
            <Timeline name={'2020 - ?'} text={'Total : 0 + years of experience'} qualification={'Đi ngủ'} />
        </div>
    </div>
    )
}
