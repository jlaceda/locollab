Dataflow Notes

Base Objects to be stored:

User
	- fields required by passport
	- attending - [Events]
	- hosting - [Events]

Events
	- owner - User
	- title
	- description
	- location
	- datetime
	- attendees [Users]

Anon User:
	- can browse events
	- can join events but kick out to login screen

Logged in User:
	- can browse events
	- can join events as attendee
	- can create new events
	- can modify events they are the owner of

