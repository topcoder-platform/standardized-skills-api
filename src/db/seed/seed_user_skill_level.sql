insert into 
	"standardized-skills".user_skill_level(name, description, created_at, updated_at)
values
	('self-declared', 'Skill declared directly by user', now(), now()),
	('verified', 'Skill verified by proof of capability', now(), now());