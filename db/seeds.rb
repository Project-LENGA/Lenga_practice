User.create!(
  name: 'osakabe',
  age: 24
)

30.times do |n|
  name = "user-#{n}"
  age = rand(10..30) + n
  User.create!(
    name: name,
    age: age
  )
end
