# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180622142758) do

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "kind"
    t.string "shift"
    t.string "level"
    t.string "description"
    t.integer "max_periods"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "subject_id"
    t.index ["subject_id"], name: "index_courses_on_subject_id"
  end

  create_table "offers", force: :cascade do |t|
    t.string "uuid"
    t.string "description"
    t.decimal "discount_percentage"
    t.decimal "offered_price"
    t.decimal "full_price"
    t.integer "university_id"
    t.integer "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_offers_on_course_id"
    t.index ["university_id"], name: "index_offers_on_university_id"
  end

  create_table "subjects", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "universities", force: :cascade do |t|
    t.string "name"
    t.string "logo"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "universities_courses", id: false, force: :cascade do |t|
    t.integer "university_id"
    t.integer "course_id"
    t.index ["course_id"], name: "index_universities_courses_on_course_id"
    t.index ["university_id"], name: "index_universities_courses_on_university_id"
  end

end
