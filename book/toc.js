// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">Introduction</a></li><li class="chapter-item expanded affix "><li class="part-title">Tokenomics</li><li class="chapter-item expanded "><a href="tokenomics/overview.html"><strong aria-hidden="true">1.</strong> Overview</a></li><li class="chapter-item expanded "><a href="tokenomics/distribution.html"><strong aria-hidden="true">2.</strong> Distribution</a></li><li class="chapter-item expanded "><a href="tokenomics/vesting.html"><strong aria-hidden="true">3.</strong> Vesting</a></li><li class="chapter-item expanded affix "><li class="part-title">Technical Architecture</li><li class="chapter-item expanded "><a href="technical/architecture.html"><strong aria-hidden="true">4.</strong> Overview</a></li><li class="chapter-item expanded "><a href="technical/system-design.html"><strong aria-hidden="true">5.</strong> System Design</a></li><li class="chapter-item expanded "><a href="technical/security.html"><strong aria-hidden="true">6.</strong> Security</a></li><li class="chapter-item expanded affix "><li class="part-title">Smart Contracts</li><li class="chapter-item expanded "><a href="smart-contracts/token.html"><strong aria-hidden="true">7.</strong> Token Contract</a></li><li class="chapter-item expanded "><a href="smart-contracts/achievement-nft.html"><strong aria-hidden="true">8.</strong> Achievement NFT</a></li><li class="chapter-item expanded "><a href="smart-contracts/interfaces.html"><strong aria-hidden="true">9.</strong> Interfaces</a></li><li class="chapter-item expanded affix "><li class="part-title">Roadmap</li><li class="chapter-item expanded "><a href="roadmap/phases.html"><strong aria-hidden="true">10.</strong> Development Phases</a></li><li class="chapter-item expanded "><a href="roadmap/milestones.html"><strong aria-hidden="true">11.</strong> Milestones</a></li><li class="chapter-item expanded "><a href="roadmap/future.html"><strong aria-hidden="true">12.</strong> Future Plans</a></li><li class="chapter-item expanded affix "><li class="part-title">Development</li><li class="chapter-item expanded "><a href="development/setup.html"><strong aria-hidden="true">13.</strong> Setup</a></li><li class="chapter-item expanded "><a href="development/testing.html"><strong aria-hidden="true">14.</strong> Testing</a></li><li class="chapter-item expanded "><a href="development/deployment.html"><strong aria-hidden="true">15.</strong> Deployment</a></li><li class="chapter-item expanded affix "><li class="part-title">API Reference</li><li class="chapter-item expanded "><a href="api/websocket.html"><strong aria-hidden="true">16.</strong> WebSocket API</a></li><li class="chapter-item expanded "><a href="api/rest.html"><strong aria-hidden="true">17.</strong> REST API</a></li><li class="chapter-item expanded "><a href="api/events.html"><strong aria-hidden="true">18.</strong> Events</a></li><li class="chapter-item expanded affix "><li class="part-title">Team</li><li class="chapter-item expanded "><a href="team/structure.html"><strong aria-hidden="true">19.</strong> Structure</a></li><li class="chapter-item expanded "><a href="team/roles.html"><strong aria-hidden="true">20.</strong> Roles</a></li><li class="chapter-item expanded "><a href="team/contact.html"><strong aria-hidden="true">21.</strong> Contact</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
