Dataflow Notes

API:
	findAllProfiles
	findOne - id
	editOne - id
	insertProfile - userId


Base Objects to be stored:
	User
		fields required by passport
		businesses - [Business(es)]

	Business (profile)
		Name
		Location
		Description
		contact info 
		Business category
		Services Provided
		Audience
		Followers [Business(es)]
		Following [Business(es)]
