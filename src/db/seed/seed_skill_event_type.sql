insert into 
	"standardized-skills".skill_event_type(name, description, created_at, updated_at)
values
	('challenge_win', 'Challenge winner', now(), now()),
	('challenge_2nd_place', 'Second place challenge finisher', now(), now()),
	('challenge_3rd_place', 'Third place challenge finisher', now(), now()),
	('challenge_finish', 'Successful challenge finisher', now(), now()),
	('gig_completion', 'Completed customer project work', now(), now()),
	('mm_win', 'Marathon Match winner', now(), now()),
	('srm_win', 'Single Round Match winner', now(), now()),
	('rdm_win', 'Rapid Development Match winner', now(), now()),
	('copilot_review', 'Copilot submission reviewer', now(), now());