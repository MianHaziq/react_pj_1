import React from 'react'

function Newsletter() {
  return (
<>

<section className="newsletter section">
			<div className="container">
				<div className="row ">
					<div className="col-lg-6  col-12">
						
						<div className="subscribe-text ">
							<h6>Sign up for newsletter</h6>
							<p className="">Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu,<br/> homero alterum.</p>
						</div>
						
					</div>
					<div className="col-lg-6  col-12">
						
						<div className="subscribe-form ">
							<form action="mail/mail.php" method="get" target="_blank" className="newsletter-inner">
								<input name="EMAIL" placeholder="Your email address" className="common-input" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Your email address'" required="" type="email"/>
								<button className="btn">Subscribe</button>
							</form>
						</div>
						
					</div>
				</div>
			</div>
		</section>

</>  )
}

export default Newsletter