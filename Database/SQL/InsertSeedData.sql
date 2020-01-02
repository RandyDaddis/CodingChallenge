USE [gogotech_demo_randy_daddis]
GO

INSERT INTO [dbo].[Product]
           ([Description]
           ,[QuantityInStock]
           ,[RetailPrice]
           ,[SalePrice])
     VALUES
           ('<h1 class="font-size-x-large color-black">Garmin vivofit jr. 2 Stretchy BB-8</h1>
                    <h2 class="font-weight-600 color-blue">Kids Activity Tracker</h2>
                    <p>Includes One Year Manufacturer''s Warranty</p>
                    <div class="item-return-policy bg-color-grey-x-light">
                        <span class="color-red-muted">Returnable:</span>
                        <span class="guarantee">30 Day Guarantee</span>
                        <span class="badge badge-pill rounded-pill bg-color-orange color-white"><i class="fas fa-info"></i></span>
                    </div>
                    <ul class="features">
                        <li><h2 class="font-weight-600 color-black">Kids Fitness Band</h2></li>
                        <li>
                            Long Battery Life
                            <ul><li>Up to 1 Year</li></ul>
                        </li>
                        <li>11 x 11 mm Easy-To-Read Display</li>
                        <li>Audible Alerts</li>
                        <li>Sleep Monitor</li>
                        <li>Displays Steps, Sleep &amp; 60 Minutes of Daily Recommended Activity</li>
                        <li class="color-blue">Vivifit Jr. Activity Tracker Controlled by Parents Using Compatible App</li>
                        <li>Water Resistent: 5ATM</li>
                        <li>Manufacturer Refurbished</li>
                    </ul>
                    <a href="#">Read More</a>'
           ,1.0
           ,37.95
           ,29.95)
GO


