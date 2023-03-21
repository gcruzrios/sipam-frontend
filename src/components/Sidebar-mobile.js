import React from 'react'

const Sidebar = () => {
  return (
    <div>
    <div class="navbar-left">
            <div class="logo-area">
               <a class="navbar-brand" href="index.html">
                  <img class="dark" src="/img/logo-white.png" alt="logo" />
                  <img class="light" src="/img/logo-white.png" alt="logo"/>
               </a>
               <a href="#" class="sidebar-toggle">
                  <img class="svg" src="/img/svg/align-center-alt.svg" alt="img"/></a>
            </div>
            <div class="top-menu">

               <div class="hexadash-top-menu position-relative">
                  <ul>
                     <li class="has-subMenu">
                        <a href="#" class="active">Dashboard</a>
                        <ul class="subMenu">
                           <li class="active">
                             <a href="dashboard.html">Demo 1</a>
                           </li>
                           <li class="">
                              <a href="demo10.html">Demo 10</a>
                           </li>
                        </ul>
                     </li>
                     <li class="has-subMenu">
                        <a href="#" class="">Layouts</a>
                        <ul class="subMenu">
                           <li class="l_sidebar">
                              <a href="#" data-layout="light">Light Mode</a>
                           </li>
                           <li class="l_sidebar">
                              <a href="#" data-layout="dark">Dark Mode</a>
                           </li>
                         
                           
                        
                        </ul>
                     </li>
                     <li class="has-subMenu">
                        <a href="#" class="">Apps</a>
                        <ul class="megaMenu-wrapper megaMenu-dropdown">
                           <li>
                              <ul>
                                 <li class="has-subMenu-left">
                                    <a href="#" class="">
                                       <img src="/img/svg/mail.svg" alt="mail" class="svg nav-icon">
                                       <span class="menu-text">Email</span>
                                    </a>
                                    <ul class="subMenu">
                                       <li>
                                          <a href="inbox.html" class="">Inbox</a>
                                       </li>
                                       <li>
                                          <a href="read-email.html" class="">Read
                                             Email</a>
                                       </li>
                                    </ul>
                                 </li>
                                 
                                 
                                 <li class="has-subMenu-left">
                                    <a href="#" class="">
                                       <span class="nav-icon uil uil-folder"></span>
                                       <span class="menu-text">Project</span>
                                    </a>
                                    <ul class="subMenu">
                                       <li>
                                          <a href="projects.html" class="">Project</a>
                                       </li>
                                       <li>
                                          <a href="application-ui.html" class="">Project Details</a>
                                       </li>
                                       <li>
                                          <a href="create.html" class="">Create
                                             Project</a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="calendar.html" class="">
                                       <span class="nav-icon uil uil-calendar-alt"></span>
                                       <span class="menu-text">Calendar</span>
                                    </a>
                                 </li>
                                 <li class="has-subMenu-left">
                                    <a href="#" class="">
                                       <span class="nav-icon uil uil-users-alt"></span>
                                       <span class="menu-text">Users</span>
                                    </a>
                                    <ul class="subMenu">
                                       <li>
                                          <a href="users-membar.html" class="">Team</a>
                                       </li>
                                       <li>
                                          <a href="users-card.html" class="">Users
                                             Grid</a>
                                       </li>
                                       <li>
                                          <a href="users-list.html" class="">Users
                                             List</a>
                                       </li>
                                       <li>
                                          <a href="users-card2.html" class="">Users
                                             Grid
                                             style</a>
                                       </li>
                                       <li>
                                          <a href="users-group.html" class="">Users
                                             Group</a>
                                       </li>
                                       <li>
                                          <a href="user-info.html" class="">Add
                                             User</a>
                                       </li>
                                       <li>
                                          <a href="users-datatable.html" class="">Users
                                             Table</a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li class="has-subMenu-left">
                                    <a href="#" class="">
                                       <img src="/img/svg/user-check.svg" alt="user-check" class="svg nav-icon"/>
                                       <span class="menu-text">OBS Contactos</span>
                                    </a>
                                    <ul class="subMenu">
                                       <li>
                                          <a class="" href="contact-1.html">Contact 1</a>
                                       </li>
                                       <li>
                                          <a class="" href="contact-2.html">Contact 2</a>
                                       </li>
                                    </ul>
                                 </li>
                                 
                                 
                              </ul>
                           </li>
                           <li>
                              <ul>
                                 
                                 <li class="has-subMenu-left">
                                    <a href="#" class="">
                                       <img src="/img/svg/repeat.svg" alt="repeat" class="svg nav-icon"/>
                                       <span class="menu-text">Import & Export</span>
                                    </a>
                                    <ul class="subMenu">
                                       <li>
                                          <a class="" href="import.html">Import</a>
                                       </li>
                                       <li>
                                          <a class="" href="export.html">Export</a>
                                       </li>
                                       <li>
                                          <a class="" href="export-selected.html">Export Selected
                                          </a>
                                       </li>
                                    </ul>
                                 </li>
                                 
                                 
                                 <li class="has-subMenu-left">
                                    <a href="#" class="">
                                       <span class="nav-icon uil uil-user"></span>
                                       <span class="menu-text">Support</span>
                                    </a>
                                    <ul class="subMenu">
                                       <li>
                                          <a class="" href="support-ticket.html">Support
                                             Ticket</a>
                                       </li>
                                       <li>
                                          <a class="" href="support-details.html">Ticket Details</a>
                                       </li>
                                       <li>
                                          <a class="" href="new-ticket.html">New
                                             Ticket</a>
                                       </li>
                                    </ul>
                                 </li>
                                 
                                 <li class="has-subMenu-left">
                                    <a href="#" class="">
                                       <span class="nav-icon uil uil-table"></span>
                                       <span class="menu-text">Table</span>
                                    </a>
                                    <ul class="subMenu">
                                       <li>
                                          <a href="basic-table.html" class="">Basic
                                             Table</a>
                                       </li>
                                       <li>
                                          <a href="datatable.html" class="">Data
                                             Table</a>
                                       </li>
                                       <li>
                                          <a href="dynamic-table.html" class="">
                                             Dynamic Table
                                          </a>
                                       </li>
                                    </ul>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                     <li class="has-subMenu">
                        <a href="#" class="">Crud</a>
                        <ul class="subMenu">
                           <li class="has-subMenu-left">
                              <a href="#" class="">
                                 <img src="/img/svg/shopping-cart.svg" alt="shopping-cart" class="svg nav-icon" />
                                 <span class="menu-text">Firestore Crud</span>
                              </a>
                              <ul class="subMenu">
                                 <li>
                                    <a class="" href="firestore.html">View All</a>
                                 </li>
                                 <li>
                                    <a class="" href="firestore-add.html">Add
                                       New</a>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                     
                     <li class="mega-item has-subMenu">
                        <a href="#" class="">Pages</a>
                        <ul class="megaMenu-wrapper megaMenu-small">
                           <li>
                              <ul>
                                 
                                 <li>
                                    <a href="profile-setting.html" class="">
                                       <span class="menu-text">Settings</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="gallery.html" class="">
                                       <span class="menu-text">Gallery 1</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="gallery2.html" class="">
                                       <span class="menu-text">Gallery 2</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="pricing.html" class="">
                                       <span class="menu-text">Pricing</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="banner.html" class="">
                                       <span class="menu-text">Banners</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="testimonial.html" class="">
                                       <span class="menu-text">Testimonial</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="faq.html" class="">
                                       <span class="menu-text">FAQ's</span>
                                    </a>
                                 </li>

                                 <li>
                                    <a href="search.html" class="">
                                       <span class="menu-text">Search Results</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="blank.html" class="">
                                       <span class="menu-text">Blank Page</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="" href="knowledgebase.html">Knowledge
                                       <span class="menu-text">Base</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a class="" href="knowledgebase-2.html">All
                                       <span class="menu-text">Article</span>
                                    </a>
                                 </li>

                                 <li>
                                    <a class="" href="knowledgebase-3.html">
                                       <span class="menu-text">Single Article</span>
                                    </a>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <ul>
                                 <li>
                                    <a href="support.html" class="">
                                       <span class="menu-text">Support Center</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="blog.html" class="">Blog Style 1</a>
                                 </li>
                                 <li>
                                    <a href="blog2.html" class="">Blog Style 2</a>
                                 </li>
                                 <li>
                                    <a href="blog3.html" class="">Blog Style 3</a>
                                 </li>
                                 <li>
                                    <a href="blog-details.html" class="">Blog
                                       Details</a>
                                 </li>
                                 <li>
                                    <a href="course.html" class="">Course</a>
                                 </li>
                                 <li>
                                    <a href="course-details.html" class="">Course
                                       Details</a>
                                 </li>
                                 <li>
                                    <a href="terms.html" class="">
                                       <span class="menu-text">Terms & Conditions</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="maintenance.html" class="">
                                       <span class="menu-text">Maintenance</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="404.html" class="">
                                       <span class="menu-text">404</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="coming-soon.html" class="">
                                       <span class="menu-text">Coming Soon</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="login.html" class="">
                                       <span class="menu-text">Log In</span>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="sign-up.html" class="">
                                       <span class="menu-text">Sign Up</span>
                                    </a>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                     <li class="mega-item has-subMenu">
                        <a href="#" class="">Components</a>
                        <ul class="megaMenu-wrapper megaMenu-wide">
                           <li>
                              <span class="mega-title">Components</span>
                              <ul>
                                 <li>
                                    <a class="" href="alert.html">Alert</a>
                                 </li>
                                 <li>
                                    <a class="" href="avatar.html">Avatar</a>
                                 </li>
                                 <li>
                                    <a class="" href="badge.html">Badge</a>
                                 </li>
                                 <li>
                                    <a class="" href="breadcrumbs.html">Breadcrumb</a>
                                 </li>
                                 <li>
                                    <a class="" href="buttons.html">Button</a>
                                 </li>
                                 <li>
                                    <a class="" href="cards.html">Cards</a>
                                 </li>
                                 <li>
                                    <a class="" href="carousel.html">Carousel</a>
                                 </li>
                                 <li>
                                    <a class="" href="checkbox.html">Checkbox</a>
                                 </li>
                                 <li>
                                    <a class="" href="collapse.html">Collapse</a>
                                 </li>
                                 <li>
                                    <a class="" href="comments.html">Comments</a>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <span class="mega-title">Components</span>
                              <ul>
                                 <li>
                                    <a class="" href="dashboard-base.html">Typography</a>
                                 </li>
                                 <li>
                                    <a class="" href="date-picker.html">DatePicker</a>
                                 </li>
                                 <li>
                                    <a class="" href="drawer.html">Drawer</a>
                                 </li>
                                 <li>
                                    <a class="" href="drag-drop.html">Drag &
                                       Drop</a>
                                 </li>
                                 <li>
                                    <a class="" href="dropdown.html">Dropdown</a>
                                 </li>
                                 <li>
                                    <a class="" href="empty.html">Empty</a>
                                 </li>
                                 <li>
                                    <a class="" href="input.html">Input</a>
                                 </li>
                                 <li>
                                    <a class="" href="list.html">List</a>
                                 </li>
                                 <li>
                                    <a class="" href="menu.html">Menu</a>
                                 </li>
                                 <li>
                                    <a class="" href="message.html">Message</a>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <span class="mega-title">Components</span>
                              <ul>
                                 <li>
                                    <a class="" href="modal.html">Modals</a>
                                 </li>
                                 <li>
                                    <a class="" href="notifications.html">Notification</a>
                                 </li>
                                 <li>
                                    <a class="" href="page-header.html">Page
                                       Headers</a>
                                 </li>
                                 <li>
                                    <a class="" href="pagination.html">Paginations</a>
                                 </li>
                                 <li>
                                    <a class="" href="progressbar.html">Progress</a>
                                 </li>
                                 <li>
                                    <a class="" href="radio.html">Radio</a>
                                 </li>
                                 <li>
                                    <a class="" href="rate.html">Rate</a>
                                 </li>
                                 <li>
                                    <a class="" href="result.html">Result</a>
                                 </li>
                                 <li>
                                    <a class="" href="select.html">Select</a>
                                 </li>
                                 <li>
                                    <a class="" href="skeleton.html">Skeleton</a>
                                 </li>
                                 <li>
                                    <a class="" href="time-picker.html">Timepicker</a>
                                 </li>
                              </ul>
                           </li>
                           <li>
                              <span class="mega-title">Components</span>
                              <ul>
                                 <li>
                                    <a class="" href="slider.html">Slider</a>
                                 </li>
                                 <li>
                                    <a class="" href="spin.html">Spinner</a>
                                 </li>
                                 <li>
                                    <a class="" href="statistics.html">Statistic</a>
                                 </li>
                                 <li>
                                    <a class="" href="steps.html">Steps</a>
                                 </li>
                                 <li>
                                    <a class="" href="switch.html">Switch</a>
                                 </li>
                                 <li>
                                    <a class="" href="tab.html">Tabs</a>
                                 </li>
                                 <li>
                                    <a class="" href="tag.html">Tags</a>
                                 </li>
                                 <li>
                                    <a class="" href="timeline.html">Timeline</a>
                                 </li>
                                 <li>
                                    <a class="" href="timeline-2.html">Timeline
                                       2</a>
                                 </li>
                                 <li>
                                    <a class="" href="timeline-3.html">Timeline
                                       3</a>
                                 </li>
                                 <li>
                                    <a class="" href="uploads.html">Upload</a>
                                 </li>
                              </ul>
                           </li>
                        </ul>
                     </li>
                  </ul>
               </div>

            </div>
         </div>
         </div>



    </div>
  )
}

export default Sidebar