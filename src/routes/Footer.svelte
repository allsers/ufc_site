
<script>
	import { base } from '$app/paths';
</script>

<footer>
	<div class="sep">
		<h1>UFC</h1>
	</div>
	<div class="container">
		<div class="row">
			<div class="footer-col">
				<h4>UFC</h4>
				<ul>
					<li><a href="{base}/"><i class="fas fa-home"></i> Home</a></li>
					<li><a href="{base}/events"><i class="fas fa-calendar-alt"></i> Events</a></li>
					<li><a href="{base}/athletes"><i class="fas fa-user-friends"></i> Athletes</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>Social Media</h4>
				<ul>
					<li><a href="https://www.facebook.com/UFC/" aria-label="Follow UFC on Facebook"><i class="fab fa-facebook"></i> Facebook</a></li>
					<li><a href="https://www.instagram.com/ufc/" aria-label="Follow UFC on Instagram"><i class="fab fa-instagram"></i> Instagram</a></li>
					<li><a href="https://www.tiktok.com/@ufc" aria-label="Follow UFC on TikTok"><i class="fab fa-tiktok"></i> TikTok</a></li>
					<li><a href="https://www.x.com/@ufc" aria-label="Follow UFC on X (formerly Twitter)"><i class="fab fa-twitter"></i> Twitter</a></li>
					<li><a href="https://www.youtube.com/ufc" aria-label="Subscribe to UFC on YouTube"><i class="fab fa-youtube"></i> YouTube</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>Legal</h4>
				<ul>
					<li><a href="{base}/terms"><i class="fas fa-file-contract"></i> Terms</a></li>
					<li><a href="{base}/privacy-policy"><i class="fas fa-user-shield"></i> Privacy Policy</a></li>
					<li><a href="{base}/"><i class="fas fa-ad"></i> Ad Choices</a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    footer {
        z-index: 3;
        background-color: black;
        color: var(--color-text1);
        padding: 20px 0;
        width: 100%;
        overflow: hidden;
    }

    footer i {
        margin-right: 3px;
    }

    h1 {
        font-family: var(--font-header);
        font-size: 2.5rem;
        color: var(--color-text1);
        text-align: left;
        width: auto; 
    }
    
    h4 {
        padding-bottom: 15px;
        text-align: left; 
    }
    
    .container {
        width: 90%;
        display: flex;
        justify-content: flex-end;
        padding: 0 20px;
    }
    
    .sep {
        padding-bottom: 20px;
        padding-left: 4%;
    }
    
    .row {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between; 
    }
    
    .footer-col {
        width: 25%;
        padding: 0 15px 30px;
        flex: 1;
        transition: height 0.3s ease, width 0.3s ease;
    }
    
    ul {
        list-style-type: none;
    }
    
    li {
        padding-bottom: 10px;
    }
    
    li a {
        color: gray;
        text-decoration: none;
        transition: color 0.3s ease, transform 0.2s ease;
        white-space: nowrap;
    }
    
    li a:hover {
        color: var(--color-text1);
        transform: translateY(-2px);
    }

    footer i {
        margin-right: 5px;
        transition: transform 0.3s ease;
    }

    li a:hover i {
        transform: rotate(360deg);
    }

    li a {
        position: relative;
    }

    li a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        bottom: -2px;
        left: 0;
        background-color: var(--color-text1);
        transition: width 0.3s ease;
    }

    li a:hover::after {
        width: 100%;
    }

    @media (max-width: 768px) {
        .container {
            width: 100%;
        }
        .sep {
            text-align: center;
            padding-bottom: 30px;
        }

        .footer-col {
            width: 50%; 
            text-align: left; 
        }

        li a {
            font-size: 0.9em;
        }
    }

    @media (max-width: 480px) {
        .container {
            width: 100%;
            padding: 0 10px;
            justify-content: center;
        }

        .row {
            flex-direction: column;
            align-items: center;
        }

        .footer-col {
            width: 100%;
            text-align: center;
            padding: 0 0 30px;
        }

        .sep {
            padding-left: 0;
            text-align: center;
        }

        h1, h4 {
            text-align: center;
        }

        ul {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>