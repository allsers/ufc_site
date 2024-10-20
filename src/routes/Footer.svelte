
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
					<li><a href="{base}/"><i class="fas fa-file-contract"></i> Terms</a></li>
					<li><a href="{base}/"><i class="fas fa-user-shield"></i> Privacy Policy</a></li>
					<li><a href="{base}/"><i class="fas fa-ad"></i> Ad Choices</a></li>
				</ul>
			</div>
		</div>
	</div>
</footer>

<style>
    footer {
		z-index: 3;
        background-color: black;
        color: var(--color-text1);
        padding: 20px 0;
		width: 100%;
		overflow: hidden;
		z-index: 3;
    }
    footer i {
		margin-right: 3px;
	}
    h1 {
        font-family: var(--font-header);
		font-size: 3em;
        color: var(--color-text1);
        margin: 0;
        text-align: left;
        width: auto; 
		font-size: 2.5rem;
    }
    
    h4 {
        margin-bottom: 15px;
        text-align: left; 
    }
    
    .container {
		width: 70%;
		display: flex;
		justify-content: flex-end;
        margin: 0 auto;
        padding: 0 20px;
    }
    
    .sep {
        margin-bottom: 20px;
		padding-left: 4%;
    }
    
    .row {
        display: flex;
		flex-wrap: wrap;
        justify-content: space-between; 
    }
    
    .footer-col {
        width: 25%;
        padding: 0 15px;
        margin-bottom: 30px;
		flex: 1;
		transition: height 0.3s ease, width 0.3s ease;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        margin-bottom: 10px;
    }
    
    li a {
        color: gray;
        text-decoration: none;
        transition: color 0.3s ease, transform 0.2s ease;;
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
        .sep {
            text-align: center;
            margin-bottom: 30px;
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
		}

		.footer-col {
			width: 100%;
			text-align: left;
		}

		li a {
			font-size: 0.85em;
			white-space: normal;
			overflow: visible;
			text-overflow: clip;
		}
		h1 {
			text-align: center;
			font-size: 2em;
		}
		h4 {
			text-align: center;
		}
    }
</style>