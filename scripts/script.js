    document.querySelectorAll('.copy-btn').forEach(button => {
      button.addEventListener('click', function(e) {
        e.stopPropagation(); 
        const url = this.getAttribute('data-url');
        const feedback = this.querySelector('.copy-feedback');
        

        navigator.clipboard.writeText(url).then(() => {
          feedback.classList.add('show');
          
          setTimeout(() => {
            feedback.classList.remove('show');
          }, 1500);
        }).catch(err => {
          console.error('Failed to copy: ', err);
          const textArea = document.createElement('textarea');
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          feedback.classList.add('show');
          setTimeout(() => {
            feedback.classList.remove('show');
          }, 1500);
        });
      });
    });