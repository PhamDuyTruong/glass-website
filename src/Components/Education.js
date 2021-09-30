import React from 'react';
import Timeline from './Timeline'

export default function Education() {
    return (
        <div>
        <div className="TimelineCon">
            <Timeline name={'September, 2020'} text={'University of Science, VietNam'} qualification={'Student'} />
            <Timeline name={'June, 2024'} text={'Unknown'} qualification={'Developer'} />
            <Timeline name={'August, 2030'} text={'Unknown'} qualification={'Code dạo'} />
            <Timeline name={'January, 2040'} text={'Unknown'} qualification={'freelancer'} />
        </div>
    </div>
    )
}
