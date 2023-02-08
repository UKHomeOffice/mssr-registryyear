const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// FYEAR CHECK yes and no
router.post('/3_FY-1', function (req, res)
  {
    const selectedOption = req.body['fy-year']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("3_FY-1", { error })}

     // Make a variable and give it the value from 'fy-year'
     var fyyear = req.session.data['fy-year']

     // Check whether the variable matches a condition
     if (fyyear == "yes"){
       // Send user to next page
       res.redirect('/4_before_you_start')
     }
     else {
       // Send user to ineligible page
       res.redirect('/3_FY-1-No')
     }
   })


// FYEAR CHECK yes and no - New user via START button
router.post('/3_FY-1', function (req, res)
  {
    const selectedOption = req.body['fy-year']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("3_FY-1", { error })}

     // Make a variable and give it the value from 'fy-year'
     var fyyear = req.session.data['fy-year']

     // Check whether the variable matches a condition
     if (fyyear == "yes"){
       // Send user to next page
       res.redirect('/new-user/scoping-journey/S12-1-ScopingQ')
     }
     else {
       // Send user to ineligible page
       res.redirect('/3_FY-1-No')
     }
   })

// FYEAR CHECK yes and no - New user via DELCARE STATUS link
router.post('/3_FY-2', function (req, res)
{
  const selectedOption = req.body['fy2-year']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("3_FY-2", { error })}

  // Make a variable and give it the value from 'fy-year'
  var fy2year = req.session.data['fy2-year']

  // Check whether the variable matches a condition
  if (fy2year == "yes"){
    // Send user to next page
    res.redirect('/4_before_you_start')
  }
  else {
    // Send user to ineligible page
    res.redirect('/3_FY-2-No')
  }
})


// FYEAR CHECK for a user adding their 2nd group org statement [via DECLARE STATUS link in the table]
router.post('/return-user-adding/3_FY-3', function (req, res)
{
  const selectedOption = req.body['fy3-year']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user-adding/3_FY-3", { error })}

  // Make a variable and give it the value from 'fy3-year'
  var fy3year = req.session.data['fy3-year']

  // Check whether the variable matches a condition
  if (fy3year == "yes"){
    // Send user to next page
    res.redirect('/return-user-adding/4_before_you_start')
  }
  else {
    // Send user to ineligible page
    res.redirect('/return-user-adding/3_FY-3-No')
  }
})



// FYEAR CHECK for a user adding their 2nd group org statement [via START button]
router.post('/return-user-adding/3_FY-4', function (req, res)
{
  const selectedOption = req.body['fy4-year']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user-adding/3_FY-4", { error })}

  // Make a variable and give it the value from 'fy3-year'
  var fy4year = req.session.data['fy4-year']

  // Check whether the variable matches a condition
  if (fy4year == "Yes"){
    // Send user to next page
    res.redirect('/return-user-adding/4_before_you_start')
  }
  else {
    // Send user to ineligible page
    res.redirect('/return-user-adding/3_FY-4-No')
  }
})

// PDF document delete check yes and no [new user]
router.post('/new-user/6S1-3-URL-PDF/S13-4-DeleteConfirm', function (req, res)
  {
    const selectedOption = req.body['delete-document']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("new-user/6S1-3-URL-PDF/S13-4-DeleteConfirm", { error })}

     // Make a variable and give it the value from 'fy-year'
     var deletedoc = req.session.data['delete-document']

     // Check to confirm the deletion
     if (deletedoc == "yes"){
       // Send user to next page
       res.redirect('/new-user/6S1-3-URL-PDF/S13-5-Deleted')
     }
     else {
       // Cancelling the deletion
       res.redirect('/new-user/6S1-3-URL-PDF/S13-3A-PDFUploaded')
     }
   })



// PDF document delete check yes and no [return user]
router.post('/return-user/6S1-3-URL-PDF/S13-4-DeleteConfirm', function (req, res)
  {
    const selectedOption = req.body['delete-document']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("return-user/6S1-3-URL-PDF/S13-4-DeleteConfirm", { error })}

     // Make a variable and give it the value from 'fy-year'
     var deletedoc = req.session.data['delete-document']

     // Check to confirm the deletion
     if (deletedoc == "yes"){
       // Send user to next page
       res.redirect('/return-user/6S1-3-URL-PDF/S13-5-Deleted')
     }
     else {
       // Cancelling the deletion
       res.redirect('/return-user/6S1-3-URL-PDF/S13-3-PDFUploaded')
     }
   })



// SCOPE CHECK - new user [via DECLARE STATUS link in the table]
router.post('/new-user/scoping-table/S12-1-ScopingQ', function (req, res)
{
  const selectedOption = req.body['scoping']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("new-user/scoping-table/S12-1-ScopingQ", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var scopingconfirm = req.session.data['scoping']

  // YES, company has to subnit the statement
  if (scopingconfirm == "yes"){
    // Send user to next page
    res.redirect('/new-user/scoping-table/S12-3-YesConfirm.html')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/new-user/scoping-table/S12-2-NoSelection')
  }
})


// SCOPE CHECK - new user [via START button]
router.post('/new-user/scoping-journey/S12-1-ScopingQ', function (req, res)
{
  const selectedOption = req.body['scoping']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("new-user/scoping-journey/S12-1-ScopingQ", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var scopingconfirm = req.session.data['scoping']

  // YES, company has to subnit the statement
  if (scopingconfirm == "yes"){
    // Send user to next page
    res.redirect('../../4_before_you_start')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/new-user/scoping-journey/S12-2-NoSelection')
  }
})


// Scoping changing reasons [WITHIN JOURNEY] - new user
router.post('/return-user/scoping/S12-1-StatusQuestion', function (req, res)
{
  const selectedOption = req.body['sc-ans']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user/scoping/S12-1-StatusQuestion", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var ansconfirm = req.session.data['sc-ans']

  if (ansconfirm == "OrgStatus"){
    res.redirect('/return-user/scoping/S12-3-YesConfirm')
  }
  else {
    res.redirect('/return-user/scoping/S12-2A-NoSelection-selected')
  }
})


// SCOPE CHECK - Return user adding their 2nd group statement [via DECLARE STATUS link in the table]
router.post('/return-user-adding/scoping-table/S12-1-ScopingQ', function (req, res)
{
  const selectedOption = req.body['ruserA']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user-adding/scoping-table/S12-1-ScopingQ", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var ruserAScopeConfirm = req.session.data['ruserA']

  // YES, company has to subnit the statement
  if (ruserAScopeConfirm == "yes"){
    // Send user to next page
    res.redirect('/return-user-adding/scoping-table/S12-3-YesConfirm.html')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user-adding/scoping-table/S12-2-NoSelection')
  }
})


// SCOPE CHECK - Return user adding their 2nd group statement [via START button]
router.post('/return-user-adding/scoping-journey/S12-1-ScopingQ', function (req, res)
{
  const selectedOption = req.body['ruserAJ']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user-adding/scoping-journey/S12-1-ScopingQ", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var ruserAJScopeConfirm = req.session.data['ruserAJ']

  // YES, company has to subnit the statement
  if (ruserAJScopeConfirm == "yes"){
    // Send user to next page
    res.redirect('/return-user-adding/4_before_you_start')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user-adding/scoping-journey/S12-2-NoSelection')
  }
})



// ORG TYPE CHECK - new user.
router.post('/new-user/6S1-1-Org/S11-1-Org', function (req, res)
{
  const selectedOption = req.body['org-type']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("new-user/6S1-1-Org/S11-1-Org", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var orgTypeconfirm = req.session.data['org-type']

  // YES, company has to subnit the statement
  if (orgTypeconfirm == "groupOrg"){
    // Send user to next page
    res.redirect('/new-user/6S1-1-group/S11-2-search')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/new-user/6S1-1-Org/S11-complete')
  }
})

// ORG TYPE CHECK - return user editing single to group statement
router.post('/return-user/6S1-1-org/S11-1-Org', function (req, res)
{
  const selectedOption = req.body['ruserE-org-type']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user/6S1-1-org/S11-1-Org", { error })}

  var ruserEorgConfirm = req.session.data['ruserE-org-type']

  // YES, company has to subnit the statement
  if (ruserEorgConfirm == "groupOrg"){
    // Send user to next page
    res.redirect('/return-user/6S1-1-group/S11-2-search.html')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user/6r_MSSR-complete')
  }
})


// ORG TYPE CHECK - return user editing group to single statement (showing alert as conditional)
router.post('/return-user/6S1-1-org/S11-1A-Org', function (req, res)
{
  const selectedOption = req.body['ruserE-org-type']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user/6S1-1-org/S11-1-Org", { error })}

  var ruserEorgConfirm = req.session.data['ruserE-org-type']

  // YES, company has to subnit the statement
  if (ruserEorgConfirm == "groupOrg"){
    // Send user to next page
    res.redirect('/return-user/6S1-1-group/S11-4-orgsReview')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user/6r_MSSR-complete')
  }
})







// ORG TYPE CHANGE CHECK - return user changing their organisation type
router.post('/return-user/6S1-1-group/S11-7-OrgTypeQ', function (req, res)
{
  const selectedOption = req.body['confirm-org']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user/6S1-1-group/S11-7-OrgTypeQ", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var OrgChangeConfirm = req.session.data['confirm-org']

  // YES, company has to submit the statement
  if (OrgChangeConfirm == "groupOrg"){
    // Send user to next page
    res.redirect('/return-user/6S1-1-group/S11-4-orgsReview')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user/6r_MSSR-complete')
  }
})





// ORG TYPE CHECK - return user adding their 2nd group statement
router.post('/return-user-adding/6S1-1-Org/S11-1-Org', function (req, res)
{
  const selectedOption = req.body['ruserA-org-type']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user-adding/6S1-1-Org/S11-1-Org", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var ruserAorgConfirm = req.session.data['ruserA-org-type']

  // YES, company has to subnit the statement
  if (ruserAorgConfirm == "groupOrg"){
    // Send user to next page
    res.redirect('/return-user-adding/6S1-1-group/S11-1-ListQ')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user-adding/6S1-1-Org/S11-complete')
  }
})


// ORG TYPE - LIST CHECK - Checking if the user adding 2nd group statement would like to use their old list
router.post('/return-user-adding/6S1-1-group/S11-1-ListQ', function (req, res)
{
  const selectedOption = req.body['use-list']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("return-user-adding/6S1-1-group/S11-1-ListQ", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var useListConfirm = req.session.data['use-list']

  // YES, company has to subnit the statement
  if (useListConfirm == "Yes"){
    // Send user to next page
    res.redirect('/return-user-adding/6S1-1-group/S11-1A-oldLists')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user-adding/6S1-1-group/S11-2-search')
  }
})



// ORG REG - User confirming if they have received a letter or not
router.post('/org-reg/2_letter', function (req, res)
{
  const selectedOption = req.body['letter-check']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("org-reg/2_letter", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var letterConfirm = req.session.data['letter-check']

  // YES, company has to subnit the statement
  if (letterConfirm == "yes"){
    // Send user to next page
    res.redirect('/org-reg/yes-letter/2B_letter-Yes')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/org-reg/no-letter/2A_letter-No')
  }
})




module.exports = router