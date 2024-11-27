import React from 'react';
import BlogItems from './BlogItems';
import TopHeader from '../../components/Top/TopHeader';





const Blog: React.FC = () => {

    return (
        <div>
            <TopHeader value="Blog"  />
            <BlogItems/>
            
            
        </div>
    );
};

export default Blog;