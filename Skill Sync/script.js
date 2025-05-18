$(document).ready(function () {
    console.log('Document is ready');
    const quotes = [
      "Believe in yourself and all that you are.",
      "Success is not final, failure is not fatal.",
      "Opportunities don't happen. You create them.",
      "Your future depends on what you do today.",
      "Dream big, stay focused, and work hard.",
      "Your skills are your wings to soar high",
      "Be so good they can't ignore you.",
      "Hard work makes achievement sweeter"
    ];
  
    let quoteIndex = 0;
    const $quoteContainer = $("#quote-container");
    console.log('Quote container:', $quoteContainer);
  
    function showQuote() {
      console.log('Showing quote:', quotes[quoteIndex]);
      // Fade out the current quote
      $quoteContainer.fadeOut(800, function () {
        // Set the new quote text
        $quoteContainer.html(`<p>${quotes[quoteIndex]}</p>`);
  
        // Increment index and loop through quotes
        quoteIndex = (quoteIndex + 1) % quotes.length;
  
        // Fade in the new quote
        $quoteContainer.fadeIn(500);
      });
    }
  
    setInterval(showQuote, 4000); // Change quotes every 3 seconds
    showQuote(); // Initially show the first quote
  });
  
  $(document).ready(function () {
    console.log('Dropdown script is ready');
    function toggleDropdown(button, dropdownId, content) {
        let $button = $(button);
        let dropdown = $(dropdownId);
  
        if (dropdown.length === 0) {
            $button.after(`
                <div id="${dropdownId.substring(1)}" class="dropdown-box">
                    <div class="dropdown-content">
                        <ul>${content}</ul>
                    </div>
                </div>
            `);
        } else {
            dropdown.toggle();
        }
  
        // Position the dropdown below the button dynamically
        let buttonOffset = $button.offset();
        $(dropdownId).css({
            top: buttonOffset.top + $button.outerHeight() + 10,
            left: buttonOffset.left,
            display: "block"
        });
    }
  
    // "Peek Inside" button click - Show dropdown box with YouTube links
    $(".btn2:contains('Peek Inside')").click(function () {
        console.log('Peek Inside button clicked');
        const content = `
            <li><a href="https://youtu.be/ts6qlECoZIg" target="_blank">Study Music</a></li>
            <li><a href="https://youtu.be/O580gBJn1ys" target="_blank">Binaural Beats</a></li>
            <li><a href="https://youtu.be/5jca-sWgemI" target="_blank">Relaxing Music</a></li>
            <li><a href="https://youtu.be/YRJ6xoiRcpQ" target="_blank">Self-Meditation Music</a></li>
            <li><a href="https://podcast.feedspot.com/hindi_motivational_podcasts/" target="_blank">Motivational Podcasts</a></li>
        `;
        toggleDropdown(this, "#peek-dropdown", content);
    });
  
    // "Go for It!!" button click - Show dropdown box with action items
    $(".btn1:contains('Go for it!!')").click(function () {
        console.log('Go for It!! button clicked');
        const content = `
            <li>Take Deep Breaths</li>
            <li>Go for a Walk</li>
            <li>Write Down Your Feelings</li>
            <li>Talk to a Friend</li>
            <li>Watch a Funny Video</li>
        `;
        toggleDropdown(this, "#go-dropdown", content);
    });
  });
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", function () {
      console.log('FAQ script is ready');
      // Array of FAQs (questions & answers)
      const faqs = [
          { question: "What is this platform about?", answer: "This platform helps students to track their interview experiences, upload resumes, and improve their placement preparation." },
          { question: "How do I create an account?", answer: "Click on the 'Enroll Now' button above and fill in the required details to create an account." },
          { question: "Can I update my resume after uploading?", answer: "Yes, you can replace your uploaded resume anytime by clicking modify" },
          { question: "How do I track my interview progress?", answer: "You can log your interview experiences, track questions asked, and review your fallbacks to prepare for the next attempt." },
          { question: "How do I contact support?", answer: "You can reach out to us through the 'Contact Us' page or by Mailing Us" },
          { question: "Is my personal data secure on this platform?", answer: "Yes, we prioritize user data security and follow industry best practices to ensure your information is safe." },
          { question: "What file formats are supported for resume uploads?", answer: "We support PDF and  DOC formats for resume uploads." },
          {question:"How can I log my interview experiences?",answer:"You can upload all the details asked in the form and track your interviews"},
          {question:"Are there templates for resumes or cover letters?",answer:"We don't have templates but we have provided the links where you can get templates easily"},
          {question:"Can I store links to external resources for a job role?",answer:"Yes, you can add them in the extra notes section"},
          { question: "Does this platform provide job listings?", answer: "Currently, we focus on interview tracking and preparation. However, we plan to integrate job listings in the future!" },
      ];
  
      const faqContainer = document.getElementById("faq-container");
  
      // Generate FAQ items dynamically
      faqs.forEach((faq, index) => {
          // Create the FAQ item container
          const faqItem = document.createElement("div");
          faqItem.classList.add("faq-item");
  
          // Create the question button
          const questionButton = document.createElement("button");
          questionButton.classList.add("faq-question");
          questionButton.innerHTML = `${faq.question} <span class="toggle-icon">+</span>`;
  
          // Create the answer div
          const answerDiv = document.createElement("div");
          answerDiv.classList.add("faq-answer");
          answerDiv.textContent = faq.answer;
  
          // Append question and answer to the FAQ item
          faqItem.appendChild(questionButton);
          faqItem.appendChild(answerDiv);
          faqContainer.appendChild(faqItem);
  
          // Add event listener for expanding/collapsing answers
          questionButton.addEventListener("click", function () {
              const isVisible = answerDiv.style.display === "block";
              
              // Hide all answers before opening a new one
              document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
              document.querySelectorAll(".toggle-icon").forEach(ic => ic.textContent = "+");
  
              // Toggle the current answer
              if (isVisible) {
                  answerDiv.style.display = "none";
                  this.querySelector(".toggle-icon").textContent = "+";
              } else {
                  answerDiv.style.display = "block";
                  this.querySelector(".toggle-icon").textContent = "−";
              }
          });
      });
  });
  

  $(document).ready(function() {
    console.log('Skills and Projects script is ready');
    // Skills Management
    $("#add-skill").click(function() {
        console.log('Add skill button clicked');
        const skillInput = $("#skill-input");
        const skill = skillInput.val().trim();
        
        if (skill) {
            const skillTag = $(`
                <div class="skill-tag">
                    ${skill}
                    <button class="remove-skill">&times;</button>
                </div>
            `);
            
            $("#skills-list").append(skillTag);
            skillInput.val("").focus();
        }
    });

    // Remove skill
    $(document).on("click", ".remove-skill", function() {
        console.log('Remove skill button clicked');
        $(this).parent().remove();
    });

    // Project Management
    $("#add-project").click(function() {
        console.log('Add project button clicked');
        const projectForm = $(`
            <div class="project-item">
                <div class="form-group">
                    <label>Project Title</label>
                    <input type="text" placeholder="Enter project title" required>
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <textarea placeholder="Enter project description" required></textarea>
                </div>
                <div class="form-group">
                    <label>Technologies Used</label>
                    <input type="text" placeholder="Enter technologies (comma-separated)" required>
                </div>
                <div class="form-group">
                    <label>Project URL (if any)</label>
                    <input type="url" placeholder="Enter project URL">
                </div>
                <div class="form-group">
                    <label>Duration</label>
                    <input type="text" class="year-input" placeholder="YYYY-YYYY" maxlength="9" pattern="\d{4}-\d{4}" required>
                </div>
                <div class="project-actions">
                    <button type="button" class="save-project-btn add-button">Save Project</button>
                    <button type="button" class="delete-button">Delete</button>
                </div>
            </div>
        `);
        
        $("#projects-list").append(projectForm);
    });

    // Save individual project
    $(document).on("click", ".save-project-btn", function() {
        console.log('Save project button clicked');
        const projectItem = $(this).closest(".project-item");
        const title = projectItem.find("input").eq(0).val();
        const description = projectItem.find("textarea").val();
        const technologies = projectItem.find("input").eq(1).val();
        const url = projectItem.find("input").eq(2).val();
        const duration = projectItem.find(".year-input").val();

        if (!title || !description || !technologies || !duration) {
            showMessage("Please fill in all required project fields", true);
            return;
        }

        // Convert to read-only display
        const savedProject = $(`
            <div class="project-item saved">
                <h3>${title}</h3>
                <p><strong>Description:</strong> ${description}</p>
                <p><strong>Technologies:</strong> ${technologies}</p>
                ${url ? `<p><strong>URL:</strong> <a href="${url}" target="_blank">${url}</a></p>` : ''}
                <p><strong>Duration:</strong> ${duration}</p>
                <div class="project-actions">
                    <button type="button" class="edit-btn add-button">Edit</button>
                    <button type="button" class="delete-button">Delete</button>
                </div>
            </div>
        `);

        projectItem.replaceWith(savedProject);
        showMessage("Project saved successfully!");
    });

    // Certificate Management
    $("#add-certificate").click(function() {
        console.log('Add certificate button clicked');
        const certificateForm = $(`
            <div class="certificate-item">
                <div class="certificate-details">
                    <div class="form-group">
                        <label>Certificate Title</label>
                        <input type="text" placeholder="Enter certificate title" required>
                    </div>
                    <div class="form-group">
                        <label>Certificate File</label>
                        <input type="file" accept=".pdf,.jpg,.jpeg,.png" required>
                    </div>
                    <div class="form-group">
                        <label>Description (Optional)</label>
                        <textarea placeholder="Enter certificate description"></textarea>
                    </div>
                </div>
                <div class="certificate-actions">
                    <button type="button" class="save-certificate-btn add-button">Save Certificate</button>
                    <button type="button" class="delete-button">Delete</button>
                </div>
            </div>
        `);
        
        $("#certificates-list").append(certificateForm);
    });

    // Save individual certificate
    $(document).on("click", ".save-certificate-btn", function() {
        console.log('Save certificate button clicked');
        const certItem = $(this).closest(".certificate-item");
        const title = certItem.find("input").eq(0).val();
        const file = certItem.find("input[type='file']").val();
        const description = certItem.find("textarea").val();

        if (!title || !file) {
            showMessage("Please fill in all required certificate fields", true);
            return;
        }

        // Convert to read-only display
        const savedCertificate = $(`
            <div class="certificate-item saved">
                <div class="certificate-details">
                    <h3>${title}</h3>
                    <p><strong>File:</strong> ${file.split('\\').pop()}</p>
                    ${description ? `<p><strong>Description:</strong> ${description}</p>` : ''}
                </div>
                <div class="certificate-actions">
                    <button type="button" class="edit-btn add-button">Edit</button>
                    <button type="button" class="delete-button">Delete</button>
                </div>
            </div>
        `);

        certItem.replaceWith(savedCertificate);
        showMessage("Certificate saved successfully!");
    });

    // Year input validation
    $(".year-input").on("input", function() {
        console.log('Year input changed');
        let value = $(this).val().replace(/[^\d-]/g, '');
        if (value.length > 9) {
            value = value.slice(0, 9);
        }
        // Format as YYYY-YYYY
        if (value.length >= 4 && !value.includes('-')) {
            value = value.slice(0, 4) + '-' + value.slice(4);
        }
        $(this).val(value);
    });

    // Form validation
    function validatePhone(phone) {
        return /^\d{10}$/.test(phone);
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function showMessage(message, isError = false) {
        console.log('Show message:', message);
        const statusDiv = $(".status-message");
        statusDiv.removeClass("success error")
            .addClass(isError ? "error" : "success")
            .text(message)
            .fadeIn()
            .delay(3000)
            .fadeOut();
    }

    // Fix delete functionality for both projects and certificates
    $(document).on("click", ".delete-button", function() {
        console.log('Delete button clicked');
        $(this).closest(".project-item, .certificate-item").remove();
    });

    // TODO List Functionality
    $("#add-task").click(function() {
        console.log('Add task button clicked');
        const taskName = $("#task-name").val().trim();
        const startDate = $("#start-date").val();
        const endDate = $("#end-date").val();
        const priority = $("#priority").val();

        if (!taskName || !startDate || !endDate) {
            alert("Please fill in all fields.");
            return;
        }

        const taskRow = $(`
            <tr>
                <td>${taskName}</td>
                <td>${startDate}</td>
                <td>${endDate}</td>
                <td>${priority}</td>
                <td class="status">Pending</td>
                <td>
                    <button class="status-btn">Complete</button>
                    <button class="delete-task-btn">Delete</button>
                </td>
            </tr>
        `);

        $("#todo-list").append(taskRow);
        $("#task-name").val("");
        $("#start-date").val("");
        $("#end-date").val("");
    });

    // Change status to Completed
    $(document).on("click", ".status-btn", function() {
        console.log('Status button clicked');
        const statusCell = $(this).closest("tr").find(".status");
        if (statusCell.text() === "Pending") {
            statusCell.text("Completed");
            $(this).text("Undo");
        } else {
            statusCell.text("Pending");
            $(this).text("Complete");
        }
    });

    // Delete task
    $(document).on("click", ".delete-task-btn", function() {
        console.log('Delete task button clicked');
        $(this).closest("tr").remove();
    });

    // Task Search Functionality
    $("#task-search").on("input", function() {
        console.log('Task search input changed');
        const searchValue = $(this).val().toLowerCase();
        $("#todo-list tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(searchValue) > -1);
        });
    });
});