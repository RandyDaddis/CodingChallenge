USE [gogotech_demo_randy_daddis]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[uspSelectProductById] @id int 
AS
BEGIN
	SET NOCOUNT ON;
	SELECT  * FROM [dbo].[Product]
	WHERE Id = @id
END
GO

CREATE PROCEDURE [dbo].[uspSelectProducts]
AS
BEGIN
	SET NOCOUNT ON;
	SELECT  * FROM [dbo].[Product]
END
GO


