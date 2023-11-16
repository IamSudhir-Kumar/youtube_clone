import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constant';
import { BedTwoTone, Category } from '@mui/icons-material';

const selectedCategory = 'New'

const Sidebar = () => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: 'auto',
                height: { xs: 'auto', md: '92%' }, // Corrected 'sx' typo
                flexDirection: { md: 'column' }, // Corrected 'coloumn' to 'column'
            }}
        >
            {categories.map((category, index) => (
                <button
                    className='category-btn'
                    style={{
                        background: category.name === selectedCategory && '#FC1503',
                        color: 'white'
                    }}
                    key={category.name}
                >
                    <span style={{
                        color: category.name === selectedCategory ? 'white' :
                            'red', marginRight: '15px'
                    }}>
                        {category.icon}
                    </span>
                    <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}>
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default Sidebar;
