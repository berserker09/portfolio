// Data
const projects = [
    {
        id: "1",
        title: "NEURAL NETWORK FOR IMAGE RECOGNITION",
        slug: "neural-network-image-recognition",
        description: "Deep learning model built with PyTorch for image classification on Linux. Achieved 94% accuracy on CIFAR-10 dataset with custom CNN architecture.",
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        releaseDate: "2025-08-20",
        isNew: true,
        link: "https://github.com/alexrivera/neural-image-recognition"
    },
    {
        id: "2",
        title: "PREDICTIVE ANALYTICS DASHBOARD",
        slug: "predictive-analytics-dashboard",
        description: "Interactive web app built with Pandas and Streamlit for real-time data analysis and forecasting. Features automated ML pipeline and custom visualizations.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        releaseDate: "2025-07-15",
        isNew: false,
        link: "https://github.com/alexrivera/predictive-dashboard"
    },
    {
        id: "3",
        title: "LINUX KERNEL TWEAKS FOR ML WORKLOADS",
        slug: "linux-kernel-ml-tweaks",
        description: "Custom Linux kernel optimizations for machine learning workloads. Reduced training time by 25% through memory management and CPU scheduling improvements.",
        imageUrl: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        releaseDate: "2025-04-10",
        isNew: false,
        link: "https://github.com/alexrivera/linux-ml-kernel"
    }
];

const blogPosts = [
    {
        id: "1",
        title: "SETTING UP A CUSTOM LINUX DISTRO FOR DATA SCIENCE",
        slug: "custom-linux-distro-data-science",
        description: "Complete guide to building a minimal Linux distribution optimized for ML workloads. Includes custom kernel, package management, and development tools.",
        publishedAt: "2025-08-18",
        isNew: true,
        link: "#"
    },
    {
        id: "2",
        title: "DEMYSTIFYING GRADIENT DESCENT IN MACHINE LEARNING",
        slug: "gradient-descent-machine-learning",
        description: "Deep dive into optimization algorithms with visual explanations and Python implementations. From basic concepts to advanced techniques like Adam and RMSprop.",
        publishedAt: "2025-06-05",
        isNew: false,
        link: "#"
    },
    {
        id: "3",
        title: "EXPLORING GANS FOR SYNTHETIC DATA GENERATION",
        slug: "gans-synthetic-data-generation",
        description: "Implementation of Generative Adversarial Networks for creating realistic synthetic datasets. Useful for augmenting small datasets in computer vision projects.",
        publishedAt: "2025-02-20",
        isNew: false,
        link: "#"
    }
];

const updates = [
    {
        id: "1",
        title: "UPDATED ML MODEL WITH BETTER ACCURACY VIA HYPERPARAMETER TUNING",
        slug: "ml-model-hyperparameter-tuning-update",
        description: "Improved image classification model from 89% to 94% accuracy using Optuna for automated hyperparameter optimization. Complete performance analysis included.",
        publishedAt: "2025-08-22",
        isNew: true,
        link: "#"
    },
    {
        id: "2",
        title: "SWITCHED TO ARCH LINUX FOR FASTER DEV ENVIRONMENT",
        slug: "arch-linux-dev-environment",
        description: "Migrated from Ubuntu to Arch Linux for development. Significant performance improvements in compile times and package management efficiency.",
        publishedAt: "2025-05-01",
        isNew: false,
        link: "#"
    }
];

const miscPosts = [
    {
        id: "1",
        title: "BASH SCRIPT FOR AUTOMATING DATA PIPELINES",
        slug: "bash-script-data-pipelines",
        description: "Custom shell scripts for automating ETL processes on Linux systems. Includes error handling, logging, and parallel processing capabilities.",
        publishedAt: "2025-08-10",
        isNew: false,
        link: "#"
    },
    {
        id: "2",
        title: "CUSTOM VIM CONFIG FOR AI CODING",
        slug: "vim-config-ai-coding",
        description: "Highly optimized Vim configuration with plugins and shortcuts specifically designed for Python, machine learning, and data science workflows.",
        publishedAt: "2025-03-25",
        isNew: false,
        link: "#"
    }
];

// Helper Functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    }).toUpperCase().replace(/,/g, '');
}

function getRelativeTime(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'today';
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
}

// Render Functions
function renderProject(project) {
    return `
        <div class="project-card">
            <img src="${project.imageUrl}" alt="${project.title} screenshot" class="project-image">
            <div class="project-content">
                <div class="project-meta">
                    <span class="project-date">[${formatDate(project.releaseDate)}]</span>
                    ${project.isNew ? '<span class="new-badge">[!!! NEW !!!]</span>' : ''}
                    <span class="project-date">${getRelativeTime(project.releaseDate)}</span>
                </div>
                <h3 class="project-title">
                    <a href="${project.link}" target="_blank">${project.title}</a>
                </h3>
                <p class="project-description">${project.description}</p>
            </div>
        </div>
    `;
}

function renderPost(post) {
    return `
        <div class="post-card">
            <div class="post-meta">
                <span class="post-date">[${formatDate(post.publishedAt)}]</span>
                ${post.isNew ? '<span class="new-badge">[!!! NEW !!!]</span>' : ''}
                <span class="post-date">${getRelativeTime(post.publishedAt)}</span>
            </div>
            <h3 class="post-title">
                <a href="${post.link}">${post.title}</a>
            </h3>
            <p class="post-description">${post.description}</p>
        </div>
    `;
}

// Initialize Page
function initializePage() {
    // Render projects
    const projectsContainer = document.getElementById('projects-container');
    projectsContainer.innerHTML = projects.map(renderProject).join('');
    
    // Render blog posts
    const blogContainer = document.getElementById('blog-container');
    blogContainer.innerHTML = blogPosts.map(renderPost).join('');
    
    // Render updates
    const updatesContainer = document.getElementById('updates-container');
    updatesContainer.innerHTML = updates.map(renderPost).join('');
    
    // Render misc posts
    const miscContainer = document.getElementById('misc-container');
    miscContainer.innerHTML = miscPosts.map(renderPost).join('');
    
    // Update footer timestamp
    const lastUpdateElement = document.getElementById('last-update');
    const now = new Date();
    const timestamp = now.toLocaleString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'UTC',
        timeZoneName: 'short'
    }).replace(/,/g, '').replace(/ /g, '_').toUpperCase();
    lastUpdateElement.textContent = timestamp;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializePage);