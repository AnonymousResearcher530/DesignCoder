
import React from 'react';
import _merged_Header_HeroSection from './components/_merged_Header_HeroSection.jsx';
import _merged_CategorySection from './components/_merged_CategorySection.jsx';
import _merged_ProductList from './components/_merged_ProductList.jsx';
import _merged_FooterNavigation from './components/_merged_FooterNavigation.jsx';

import './App.css';

const App = () => {
    return(
    <div id="pageContainer">
    <_merged_Header_HeroSection />
<_merged_CategorySection />
<_merged_ProductList />
<_merged_FooterNavigation />
    
    </div>
);}


export default App;
    