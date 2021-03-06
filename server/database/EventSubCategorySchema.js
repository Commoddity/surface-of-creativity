const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSubCategorySchema = new Schema({
  name: { type: String, trim: true, unique: true },
  icon: String,
  showOnNavbar: Boolean,
  eventCategories: [{ type: Schema.Types.ObjectId, ref: 'EventCategory' }],
  createdAt: Date,
});

module.exports = EventSubCategorySchema;
