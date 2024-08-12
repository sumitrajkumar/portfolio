import React from 'react';
import './info.css'; // Import your CSS file for styling

const Info: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://www.instagram.com/sumitkumar.dev/" target="_blank" rel="noopener noreferrer">
          <img src="src\components\Extra_info\instagram_logo.png" alt="Instagram" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/sumit-kumar-351323262/" target="_blank" rel="noopener noreferrer">
          <img src="src\components\Extra_info\linkdein_logo.png" alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="https://github.com/sumitrajkumar" target="_blank" rel="noopener noreferrer">
          <img src="src\components\Extra_info\github_logo.png" alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://leetcode.com/u/why404/" target="_blank" rel="noopener noreferrer">
          <img src="/src\components\Extra_info\LeetCode_logo.png" alt="LeetCode" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Info;
