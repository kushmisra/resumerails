class UserMailer < ApplicationMailer

	default from: "conannadagawaiskush@gmail.com"

	def submit_email(email)
		@temail = email
		mail(to: temail,subject:'Thanks for your time :)')
	end

end
