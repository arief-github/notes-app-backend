const mapDBToModel = ({
	id,
	title,
	body,
	tags,
	created_at,
	updated_at
}) => ({
	id,
	title,
	body,
	tags,
	createdAt: created_at,
	updateAt: updated_at,
});

module.exports = { mapDBToModel };