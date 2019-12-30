USE [master]
GO

/****** Object:  Database [gogotech_demo_randy_daddis]    Script Date: 12/28/2019 4:57:18 PM ******/
DROP DATABASE [gogotech_demo_randy_daddis]
GO

/****** Object:  Database [gogotech_demo_randy_daddis]    Script Date: 12/28/2019 4:57:18 PM ******/
CREATE DATABASE [gogotech_demo_randy_daddis]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'gogotech_demo_randy_daddis', FILENAME = N'C:\d\db\gogotech\gogotech_demo_randy_daddis.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'gogotech_demo_randy_daddis_log', FILENAME = N'C:\d\db\gogotech\gogotech_demo_randy_daddis_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO

IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [gogotech_demo_randy_daddis].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET ANSI_NULL_DEFAULT OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET ANSI_NULLS OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET ANSI_PADDING OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET ANSI_WARNINGS OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET ARITHABORT OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET AUTO_CLOSE OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET AUTO_SHRINK OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET AUTO_UPDATE_STATISTICS ON 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET CURSOR_DEFAULT  GLOBAL 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET CONCAT_NULL_YIELDS_NULL OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET NUMERIC_ROUNDABORT OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET QUOTED_IDENTIFIER OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET RECURSIVE_TRIGGERS OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET  DISABLE_BROKER 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET TRUSTWORTHY OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET PARAMETERIZATION SIMPLE 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET READ_COMMITTED_SNAPSHOT OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET HONOR_BROKER_PRIORITY OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET RECOVERY SIMPLE 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET  MULTI_USER 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET PAGE_VERIFY CHECKSUM  
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET DB_CHAINING OFF 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET DELAYED_DURABILITY = DISABLED 
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET QUERY_STORE = OFF
GO

USE [gogotech_demo_randy_daddis]
GO

ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO

ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO

ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO

ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO

ALTER DATABASE [gogotech_demo_randy_daddis] SET  READ_WRITE 
GO


