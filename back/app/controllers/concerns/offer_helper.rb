module OfferHelper
  def build_search_criteria(params)
    unscoped = Offer.unscoped.includes(:university, :course).joins(:university, :course)

    api_hash = params.permit("university_id", "course_id", "kind", "level", "shift", "discount_percentage_min", "offered_price_max").to_h

    courses_hash = {}

    courses_hash.store("kind", api_hash.delete("kind")) unless !api_hash.has_key? ("kind")
    courses_hash.store("level", api_hash.delete("level")) unless !api_hash.has_key? ("level")
    courses_hash.store("shift", api_hash.delete("shift")) unless !api_hash.has_key? ("shift")

    unless courses_hash.empty?
      api_hash["courses"] = courses_hash
      # unscoped = unscoped.joins(:course)
    end

    discount_min = api_hash.delete "discount_percentage_min"
    offered_max = api_hash.delete "offered_price_max"

    offered_max ||= 1000

    unscoped = unscoped.where(api_hash)

    unscoped = unscoped.where("discount_percentage >= ?", discount_min) unless discount_min == nil
    unscoped.where("offered_price <= ?", offered_max)
  end
end
