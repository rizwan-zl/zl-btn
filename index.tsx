import React from 'react';
import { BadgeComponent } from './badge/badge.component'

function App() {
    return (
        <BadgeComponent count={10} badgeType='PRIMARY' />
    );
}

export default App;
