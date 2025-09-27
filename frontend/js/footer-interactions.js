// Footer Interactive Functions

// Teacher Dashboard Functions
function quickAttendance() {
    showToast('🚀 Quick Attendance mode activated!', 'success');
    // Simulate quick attendance
    setTimeout(() => {
        showToast('✅ Attendance marked for all present students', 'info');
    }, 1500);
}

function exportData() {
    showToast('📊 Preparing data export...', 'info');
    setTimeout(() => {
        showToast('💾 Data exported successfully!', 'success');
    }, 2000);
}

// Student Dashboard Functions  
function quickGrades() {
    showToast('📈 Loading your latest grades...', 'info');
    setTimeout(() => {
        showToast('🎯 Current GPA: 8.8 | Latest: A in Computer Science', 'success');
    }, 1500);
}

function contactMentor() {
    showToast('📞 Connecting to Dr. Devesh Bandil...', 'info');
    setTimeout(() => {
        showToast('✅ Message sent to mentor successfully!', 'success');
    }, 2000);
}

// Parent Dashboard Functions
function scheduleCall() {
    showToast('📅 Opening scheduling interface...', 'info');
    setTimeout(() => {
        showToast('✅ Call scheduled for tomorrow 3:00 PM', 'success');
    }, 1500);
}

function viewReports() {
    showToast('📊 Generating comprehensive report...', 'info');
    setTimeout(() => {
        showToast('📈 Report ready: Child performing excellently!', 'success');
    }, 2000);
}

// Universal Functions
function showToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    toast.style.cssText = `
        top: 20px; 
        right: 20px; 
        z-index: 9999; 
        min-width: 350px;
        border-radius: 15px;
        backdrop-filter: blur(10px);
        animation: slideInRight 0.5s ease;
    `;
    toast.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.animation = 'slideOutRight 0.5s ease';
            setTimeout(() => toast.remove(), 500);
        }
    }, 4000);
}

// Initialize footer interactions
document.addEventListener('DOMContentLoaded', function() {
    // Update last sync time
    const lastSyncElement = document.getElementById('lastSync');
    if (lastSyncElement) {
        lastSyncElement.textContent = new Date().toLocaleTimeString();
        
        // Update every minute
        setInterval(() => {
            lastSyncElement.textContent = new Date().toLocaleTimeString();
        }, 60000);
    }
    
    // Add hover effects to footer buttons
    document.querySelectorAll('.modern-footer .btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animations
    document.querySelectorAll('.modern-footer .btn').forEach(btn => {
        btn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);